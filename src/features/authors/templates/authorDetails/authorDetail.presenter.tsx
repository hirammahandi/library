import { FC } from "react";
import { useGetAuthor } from "../../services/useGetAuthor";
import { AuthorDetail, BookOfAuthor } from "@/components/molecules";

type AuthorDetailPresenterProps = {
  model: ReturnType<typeof useGetAuthor>;
};

const AuthorDetailPresenter: FC<AuthorDetailPresenterProps> = ({ model: { values, actions } }) => {
  const { author, loading, count } = values;
  const { handleDeleteAuthorById, handleRefetchOnCount } = actions;

  if (!author) return <h2>Book Not Found</h2>;

  const { books, ...restAuthor } = author;

  return (
    <AuthorDetail
      author={restAuthor}
      books={books?.edges as BookOfAuthor}
      loading={loading}
      countValue={count}
      handleDeleteAuthorById={handleDeleteAuthorById}
      handleRefetchOnCount={handleRefetchOnCount}
    />
  );
};

export default AuthorDetailPresenter;
