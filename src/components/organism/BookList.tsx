import { AllBooksFragment, GetAllBooksQuery } from "@/__generated__/graphql";
import { FC } from "react";
import BookCard from "../molecules/BookCard";
import { Flex } from "../ui/atoms";

type BookListProps = {
  books: GetAllBooksQuery["bookCollection"];
  error?: unknown;
};

const BookList: FC<BookListProps> = ({ books, error }) => {
  return (
    <Flex gap={20} gutterBottom>
      {books?.edges && Boolean(books.edges.length) && !error ? (
        books.edges.map((value) => {
          const book: AllBooksFragment = {
            id: value!.node.id,
            cover: value!.node.cover,
            description: value!.node.description,
            title: value!.node.title,
          };
          const authors = value!.node!.authors!.edges! as any;

          return <BookCard key={value?.node.id} book={book} authors={authors} />;
        })
      ) : (
        <h2 style={{ textAlign: "center" }}>Not Books to display</h2>
      )}
    </Flex>
  );
};

export default BookList;
