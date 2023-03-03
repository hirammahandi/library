import Link from "next/link";
import { FC } from "react";
import { Button, Flex } from "../ui/atoms";
import { AuthorOfBook } from "./__types";

type AuthorsOfBooksProps = {
  authors: AuthorOfBook;
};

const BookAuthors: FC<AuthorsOfBooksProps> = ({ authors }) => {
  return (
    <Flex gap={8}>
      {authors.map((author) => (
        <Link key={author.node.id} href={`/authors/${author.node.id}`}>
          <Button variant="text" color="gray">
            {author.node.name}
          </Button>
        </Link>
      ))}
    </Flex>
  );
};

export default BookAuthors;
