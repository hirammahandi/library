import { useCreateBook } from "../../services";
import EditBookPresenter from "./editBook.presenter";

const EditBookContainer = () => {
  const model = useCreateBook();
  return <EditBookPresenter />;
};

export default EditBookContainer;
