import { AuthorConnection } from "@/__generated__/graphql";
import { useGlobalState, useSetCount } from "@/hooks";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { GET_ALL_AUTHORS } from "../graphql";
import { orderAuthors } from "../utils";

export const useGetAllAuthors = () => {
  const { count, handleChangeCount } = useSetCount();

  const { deferredSearchValue, orderBy } = useGlobalState();

  const { data, loading, error, refetch } = useQuery(GET_ALL_AUTHORS, {
    variables: {
      firstAuthors: 5,
    },
    notifyOnNetworkStatusChange: true,
  });
  const authors = data?.authorCollection?.edges;

  const filteredBooks = useMemo(
    () =>
      (deferredSearchValue
        ? authors?.filter((value) =>
            value?.node.name.toLowerCase().includes(deferredSearchValue.toLowerCase())
          )
        : authors) as AuthorConnection["edges"],

    [authors, deferredSearchValue]
  );

  const orderedAuthors = useMemo(
    () => orderAuthors(orderBy, filteredBooks),
    [filteredBooks, orderBy]
  );

  const handleRefetchOnCount = (count: number) => {
    handleChangeCount(count, () => {
      refetch({
        firstAuthors: count,
      });
    });
  };

  return {
    values: { orderedAuthors, loading, error, count },
    actions: { handleRefetchOnCount },
  };
};
