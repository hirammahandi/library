import { FC } from "react";
import { BookOfAuthor } from "./__types";
import { Button, Flex } from "../ui/atoms";
import Link from "next/link";

type BooksAuthorProps = {
  books: BookOfAuthor;
};

const BooksAuthor: FC<BooksAuthorProps> = ({ books }) => (
  <Flex gap={8}>
    {books.map((book) => (
      <Link key={book.node.id} href={`/books/${book.node.id}`}>
        <Button variant="text" color="gray">
          {book.node.title}
        </Button>
      </Link>
    ))}
  </Flex>
);

export default BooksAuthor;
