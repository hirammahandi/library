import { DELETE_BOOK_BY_ID, GET_ALL_BOOKS_QUERY, GET_BOOK_BY_ID } from "@/features/books";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import { useMutation, useQuery } from "@apollo/client";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Image
import EmptyImage from "@/assets/images/empty-images.png";
import { MutationBookDeleteArgs } from "@/__generated__/graphql";

const BookByIdPage = () => {
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

  const book = data?.book;

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
          },
          "getAllBooks",
        ],
      });

      router.push("/books");
    } catch (error) {
      console.error(error);
    }
  };

  if (!book) return <h2>Book Not Found</h2>;

  return (
    <div
      style={{
        width: 600,
        marginInline: "auto",
        border: "thin solid #000",
        height: 300,
        padding: 10,
        display: "flex",
        gap: 40,
      }}
    >
      <Image src={EmptyImage} width={100} height={100} alt="" />
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <span>Title: {book?.title}</span>
        <span>ISBN: {book?.isbn}</span>
        <div>
          <span>Authors:</span>
          <ul style={{ marginLeft: 10 }}>
            {book?.authors?.edges?.map((author) => (
              <li key={author?.node.id} style={{ listStyle: "none" }}>
                <Link href={`/authors/${author?.node.id}`} style={{ textDecoration: "underline" }}>
                  {author?.node.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <span>Publication Year: {book?.publicationYear}</span>
        <p>Description: {book?.description}</p>

        <div>
          {loading ? (
            <span>Loading...</span>
          ) : (
            <>
              <button onClick={() => handleDeleteBookById(book.id)}>Delete</button>
              <button>
                <Link href={`/books/${book.id}/edit`}>Edit</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
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

export default BookByIdPage;
