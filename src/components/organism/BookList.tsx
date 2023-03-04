import {
  AllBooksFragment,
  BookConnection,
  GetAllBooksQuery,
  GetAuthorOfBookFragment,
} from "@/__generated__/graphql";
import { FC } from "react";
import BookCard from "../molecules/BookCard";
import { Flex, TextCenter } from "../ui/atoms";
import { AuthorOfBook } from "../molecules";

type BookListProps = {
  books: BookConnection["edges"];
  error?: unknown;
};

const BookList: FC<BookListProps> = ({ books, error }) => {
  return (
    <Flex gap={20} gutterBottom>
      {books && Boolean(books.length) && !error ? (
        books.map((value) => {
          const book: AllBooksFragment = {
            id: value!.node.id,
            cover: value!.node.cover,
            description: value!.node.description,
            title: value!.node.title,
          };
          const authors = value!.node!.authors!.edges! as AuthorOfBook;

          return <BookCard key={value?.node.id} book={book} authors={authors} />;
        })
      ) : (
        <TextCenter>Not Books to display</TextCenter>
      )}
    </Flex>
  );
};

export default BookList;
