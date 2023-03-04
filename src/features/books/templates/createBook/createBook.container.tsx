import { useCreateBook } from "../../services";
import CreateBookPresenter from "./createBook.presenter";

const CreateBookContainer = () => {
  const createBookModel = useCreateBook();

  return <CreateBookPresenter model={createBookModel} />;
};

export default CreateBookContainer;
