import { initializeApollo, addApolloState } from "@/lib/apolloClient";
import { gql, useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";

const ALL_POSTS_QUERY = gql`
  query getAllBooks {
    bookCollection(first: 5) {
      edges {
        node {
          title
          isbn
          description
          cover
          publicationYear
          id
          authors(first: 5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const Home = () => {
  const { data } = useQuery(ALL_POSTS_QUERY, {
    notifyOnNetworkStatusChange: true,
  });

  return <div>{JSON.stringify(data, null, 4)}</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default Home;
