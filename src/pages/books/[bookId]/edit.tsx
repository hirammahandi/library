import { EditBookContainer, GET_BOOK_BY_ID } from "@/features/books";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import { GetServerSideProps } from "next";

const EditBookPage = () => {
  return <EditBookContainer />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params;

  const bookId = params?.bookId;

  if (!bookId)
    return {
      notFound: true,
    };

  const apolloClient = initializeApollo();

  const res = await apolloClient.query({
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
