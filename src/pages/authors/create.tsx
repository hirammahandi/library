import { TextCenter } from "@/components/ui/atoms";
import { CreateAuthorContainer, GET_BOOKS_FOR_SELECT } from "@/features/authors";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import { GetServerSideProps } from "next";

const CreateAuthorPage = () => {
  return (
    <>
      <TextCenter>CREATE AN AUTHOR</TextCenter>
      <CreateAuthorContainer />;
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_BOOKS_FOR_SELECT,
    variables: {
      bookFirst: 100,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default CreateAuthorPage;
