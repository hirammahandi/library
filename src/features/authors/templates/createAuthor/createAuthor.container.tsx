import { useCreateAuthor } from "../../services";
import CreateAuthorPresenter from "./createAuthor.presenter";

const CreateAuthorContainer = () => {
  const createAuthorModel = useCreateAuthor();
  return <CreateAuthorPresenter model={createAuthorModel} />;
};

export default CreateAuthorContainer;
