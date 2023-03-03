import BookList from "@/components/organism/BookList";
import { FC } from "react";
import { useGetAllBooks } from "../../services";

type BookPresenterProps = {
  model: ReturnType<typeof useGetAllBooks>;
};

const BookPresenter: FC<BookPresenterProps> = ({ model: { values } }) => {
  const { books, hasBooks, error } = values;

  return (
    <>{Boolean(hasBooks) || !error ? <BookList books={books} /> : <h2>No books to display</h2>}</>
  );
};

export default BookPresenter;
