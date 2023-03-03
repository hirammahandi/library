import { AllBooksFragment, GetAllBooksQuery } from "@/__generated__/graphql";
import { FC } from "react";
import BookCard from "../molecules/BookCard";
import { Flex } from "../ui/atoms";

type BookListProps = {
  books: GetAllBooksQuery["bookCollection"];
};

const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <Flex gap={20} gutterBottom>
      {books!.edges!.map((value) => {
        const book: AllBooksFragment = {
          id: value!.node.id,
          cover: value!.node.cover,
          description: value!.node.description,
          title: value!.node.title,
        };
        const authors = value!.node!.authors!.edges! as any;

        return <BookCard key={value?.node.id} book={book} authors={authors} />;
      })}
    </Flex>
  );
};

export default BookList;
