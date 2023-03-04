import { useQuery } from "@apollo/client";
import { GET_ALL_BOOKS_QUERY } from "../graphql";

export const useGetAllBooks = () => {
  const { data, error, loading } = useQuery(GET_ALL_BOOKS_QUERY, {
    variables: {
      authorFirst: 5,
      bookFirst: 10,
    },

    notifyOnNetworkStatusChange: true,
  });

  const books = data?.bookCollection;

  return {
    values: { books, error, loading },
  };
};
