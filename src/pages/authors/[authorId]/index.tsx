import { AuthorDetailsContainer, GET_AUTHOR } from "@/features/authors";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import { GetServerSideProps } from "next";

const AuthorByIdPage = () => {
  return <AuthorDetailsContainer />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const params = ctx.params;

  const authorId = params?.authorId;

  if (!authorId)
    return {
      notFound: true,
    };

  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_AUTHOR,
    variables: {
      by: {
        id: authorId as string,
      },
      bookFirst: 5,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default AuthorByIdPage;
