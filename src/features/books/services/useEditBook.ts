import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { GET_BOOK_BY_ID } from "../graphql";

export const useEditBook = () => {
  const router = useRouter();
  const bookId = router.query.bookId as string;

  const { data } = useQuery(GET_BOOK_BY_ID, {
    variables: {
      by: {
        id: bookId,
      },
      first: 100,
    },
    skip: !bookId,
  });

  return {
    data,
  };
};
