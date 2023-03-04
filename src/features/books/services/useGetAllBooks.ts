import { BookConnection } from "@/__generated__/graphql";
import { useGlobalState, useSetCount } from "@/hooks";
import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { GET_ALL_BOOKS_QUERY } from "../graphql";
import { orderBooks } from "../utils";

export const useGetAllBooks = () => {
  const { count, handleChangeCount } = useSetCount();

  const { deferredSearchValue, orderBy } = useGlobalState();

  const { data, error, loading, refetch } = useQuery(GET_ALL_BOOKS_QUERY, {
    variables: {
      authorFirst: 5,
      bookFirst: 5,
    },
    notifyOnNetworkStatusChange: true,
  });

  const books = data?.bookCollection?.edges;

  const filteredBooks = useMemo(
    () =>
      (deferredSearchValue
        ? books?.filter(
            (value) =>
              value?.node.title.toLowerCase().includes(deferredSearchValue.toLowerCase()) ||
              value?.node.authors?.edges?.some((value) =>
                value?.node.name.toLowerCase().includes(deferredSearchValue.toLowerCase())
              )
          )
        : books) as BookConnection["edges"],
    [books, deferredSearchValue]
  );

  const orderedBooks = useMemo(() => orderBooks(orderBy, filteredBooks), [filteredBooks, orderBy]);

  const filterBooks = orderedBooks?.filter((value) => Boolean(value?.node.authors?.edges?.length));

  const handleRefetchOnCount = (count: number) => {
    handleChangeCount(count, () => {
      refetch({
        authorFirst: 5,
        bookFirst: count,
      });
    });
  };

  return {
    values: { error, loading, count, filterBooks },
    actions: { handleRefetchOnCount },
  };
};
