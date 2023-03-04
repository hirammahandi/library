import { MutationBookDeleteArgs } from "@/__generated__/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { DELETE_BOOK_BY_ID, GET_ALL_BOOKS_QUERY, GET_BOOK_BY_ID } from "../graphql";
import { useSetCount } from "@/hooks";

export const useGetBook = () => {
  const router = useRouter();
  const bookId = router.query.bookId as string;
  const { count, handleChangeCount } = useSetCount();

  const { data, refetch } = useQuery(GET_BOOK_BY_ID, {
    variables: {
      by: {
        id: bookId,
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
            variables: {
              authorFirst: 5,
              bookFirst: 5,
            },
          },
          "getAllBooks",
        ],
      });
    } catch (error) {
      toast.error("An error has ocurred", { position: "top-right" });
    }
    await router.push("/books");
  };

  const handleRefetchOnCount = (count: number) => {
    handleChangeCount(count, () => {
      refetch({
        first: count,
        by: {
          id: bookId,
        },
      });
    });
  };

  return {
    values: { book, authors, loading, count },
    actions: { handleDeleteBookById, handleRefetchOnCount },
  };
};
