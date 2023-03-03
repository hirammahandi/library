import { BookDetails } from "@/components/molecules";
import { FC } from "react";
import { useGetBook } from "../../services/useGetBook";

type BookDetailsPresenterProps = {
  model: ReturnType<typeof useGetBook>;
};

const BookDetailsPresenter: FC<BookDetailsPresenterProps> = ({ model: { values, actions } }) => {
  const { book, authors, loading } = values;
  const { handleDeleteBookById } = actions;

  if (!book) return <h2>Book Not Found</h2>;

  return (
    <BookDetails
      book={book}
      authors={authors}
      handleDeleteBookById={handleDeleteBookById}
      loading={loading}
    />
  );
};

export default BookDetailsPresenter;
