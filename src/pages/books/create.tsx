import { TextCenter } from "@/components/ui/atoms";
import { GET_AUTHORS_FOR_SELECT } from "@/features/authors";
import { CreateBookContainer } from "@/features/books";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import { GetServerSideProps } from "next";

const CreateBookPage = () => {
  return (
    <>
      <TextCenter>CREATE A BOOK</TextCenter>
      <CreateBookContainer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_AUTHORS_FOR_SELECT,
    variables: {
      firstAuthors: 100,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default CreateBookPage;
