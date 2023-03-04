import { BookDetails } from "@/components/molecules";
import { FC } from "react";
import { useGetBook } from "../../services/useGetBook";

type BookDetailsPresenterProps = {
  model: ReturnType<typeof useGetBook>;
};

const BookDetailsPresenter: FC<BookDetailsPresenterProps> = ({ model: { values, actions } }) => {
  const { book, authors, loading, count } = values;
  const { handleDeleteBookById, handleRefetchOnCount } = actions;

  if (!book) return <h2>Book Not Found</h2>;

  return (
    <BookDetails
      book={book}
      authors={authors}
      loading={loading}
      countValue={count}
      handleDeleteBookById={handleDeleteBookById}
      handleRefetchOnCount={handleRefetchOnCount}
    />
  );
};

export default BookDetailsPresenter;
