import BookList from "@/components/organism/BookList";
import { Loader } from "@/components/ui/atoms";
import { FC } from "react";
import { useGetAllBooks } from "../../services";
import { CenterLoader } from "@/components/molecules";

type BookPresenterProps = {
  model: ReturnType<typeof useGetAllBooks>;
};

const BookPresenter: FC<BookPresenterProps> = ({ model: { values } }) => {
  const { books, loading, error } = values;

  return <>{!loading ? <BookList books={books} error={error} /> : <CenterLoader />}</>;
};

export default BookPresenter;
