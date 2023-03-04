import { MutationBookDeleteArgs } from "@/__generated__/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_BOOK_BY_ID, GET_ALL_BOOKS_QUERY, GET_BOOK_BY_ID } from "../graphql";

export const useGetBook = () => {
  const router = useRouter();
  const bookId = router.query.bookId;

  const { data } = useQuery(GET_BOOK_BY_ID, {
    variables: {
      by: {
        id: bookId as string,
      },
      first: 5,
    },
  });

  const book = data?.book;
  const authors = book?.authors?.edges as any;

  const [deleteBook, { loading }] = useMutation(DELETE_BOOK_BY_ID);

  const handleDeleteBookById = async (id: string) => {
    try {
      const variables: MutationBookDeleteArgs = {
        by: {
          id,
        },
      };

      await deleteBook({
        variables,
        refetchQueries: [
          {
            query: GET_ALL_BOOKS_QUERY,
          },
          "getAllBooks",
        ],
      });

      await router.push("/books");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    values: { book, authors, loading },
    actions: { handleDeleteBookById },
  };
};
