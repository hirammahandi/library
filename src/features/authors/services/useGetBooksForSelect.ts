import { useQuery } from "@apollo/client";
import { GET_BOOKS_FOR_SELECT } from "../graphql";
import { useMemo } from "react";

export const useGetBooksForSelect = () => {
  const { data } = useQuery(GET_BOOKS_FOR_SELECT, {
    variables: {
      bookFirst: 100,
    },
  });

  const books = data?.bookCollection?.edges;

  const booksOptions = useMemo(
    () =>
      books && books.length
        ? books.map<{ value: string; label: string }>((book) => ({
            value: book!.node.id,
            label: book!.node.title,
          }))
        : [],
    [books]
  );

  return {
    values: { booksOptions },
  };
};
