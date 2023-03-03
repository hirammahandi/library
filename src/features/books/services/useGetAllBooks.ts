import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS_QUERY } from "../graphql";

export const useGetAllBooks = () => {
  const { data, error } = useQuery(GET_ALL_BOOKS_QUERY, {
    variables: {
      authorFirst: 5,
      bookFirst: 5,
    },

    notifyOnNetworkStatusChange: true,
  });

  const hasBooks = data?.bookCollection?.edges?.length;
  const books = data?.bookCollection;

  return {
    values: { books, hasBooks, error },
  };
};
