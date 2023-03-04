import { useGetAuthor } from "../../services/useGetAuthor";
import AuthorDetailPresenter from "./authorDetail.presenter";

const AuthorDetailContainer = () => {
  const getAuthorModel = useGetAuthor();
  return <AuthorDetailPresenter model={getAuthorModel} />;
};

export default AuthorDetailContainer;
