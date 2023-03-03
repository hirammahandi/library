import { useGetAllBooks } from "../../services/useGetAllBooks";
import BookPresenter from "./books.presenter";

const BookContainer = () => {
  const getAllBooksModel = useGetAllBooks();

  return <BookPresenter model={getAllBooksModel} />;
};

export default BookContainer;
