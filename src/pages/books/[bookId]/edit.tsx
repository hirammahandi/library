import { EDIT_BOOK, GET_BOOK_BY_ID } from "@/features/books";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import { useMutation, useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

const EditBookPage = () => {
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
  const [editBook, { loading }] = useMutation(EDIT_BOOK);

  const book = data?.book;

  if (!book) return <h2>Book Not Found</h2>;

  return <div>Edit</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params;

  const bookId = params?.bookId;

  if (!bookId)
    return {
      notFound: true,
    };

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_BOOK_BY_ID,
    variables: {
      by: {
        id: bookId as string,
      },
      first: 5,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default EditBookPage;
