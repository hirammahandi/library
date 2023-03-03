import { useGetBook } from "../../services/useGetBook";
import BookDetailsPresenter from "./bookDetails.presenter";

const BookDetailsContainer = () => {
  const getBookModel = useGetBook();
  return <BookDetailsPresenter model={getBookModel} />;
};

export default BookDetailsContainer;
