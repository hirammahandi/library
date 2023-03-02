import { GET_ALL_BOOKS_QUERY } from "@/features/books";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import { useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";

// Image
import EmptyImage from "@/assets/images/empty-images.png";

const BookPage = () => {
  const { data } = useQuery(GET_ALL_BOOKS_QUERY, {
    variables: {
      authorFirst: 5,
      bookFirst: 5,
    },

    notifyOnNetworkStatusChange: true,
  });

  const books = data?.bookCollection?.edges;

  return (
    <div>
      <ul style={{ display: "flex", alignItems: "center", gap: 40 }}>
        {Boolean(books) &&
          books?.map((book) => (
            <li
              key={book?.node.id}
              style={{
                minWidth: 200,
                border: "thin solid",
                listStyle: "none",
                padding: 10,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <span>Title: {book?.node.title}</span>
              <Image
                src={
                  book?.node.cover.includes("http") ? EmptyImage : book?.node.cover ?? EmptyImage
                }
                priority
                alt=""
                width={100}
                height={100}
              />
              <span>Description: {book?.node.description}</span>
              <div>
                <span style={{ display: "block" }}>Authors: </span>
                {book?.node.authors?.edges?.map((author) => (
                  <Link
                    key={author?.node.id}
                    href={`/authors/${author?.node.id}`}
                    style={{ textDecoration: "underline", display: "block" }}
                  >
                    {author?.node.name}
                  </Link>
                ))}
              </div>
              <Link href={`/books/${book?.node.id}`}>
                <button>More...</button>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_ALL_BOOKS_QUERY,
    variables: {
      bookFirst: 5,
      authorFirst: 5,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
};

export default BookPage;
