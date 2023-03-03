import { BookContainer, GET_ALL_BOOKS_QUERY } from "@/features/books";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import { GetServerSideProps } from "next";

const BookPage = () => {
  return <BookContainer />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ALL_BOOKS_QUERY,
    variables: {
      bookFirst: 10,
      authorFirst: 10,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default BookPage;
