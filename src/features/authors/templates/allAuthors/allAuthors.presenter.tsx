import { FC } from "react";
import { useGetAllAuthors } from "../../services";
import { CenterLoader } from "@/components/molecules";
import { SelectCount } from "@/components/ui/atoms";
import { AuthorsList } from "@/components/organism";

type AllAuthorsPresenterProps = {
  model: ReturnType<typeof useGetAllAuthors>;
};

const AllAuthorsPresenter: FC<AllAuthorsPresenterProps> = ({ model: { actions, values } }) => {
  const { loading, orderedAuthors, count, error } = values;
  const { handleRefetchOnCount } = actions;

  return (
    <>
      <SelectCount
        countValue={count}
        loading={loading && !error}
        handleRefetchOnCount={handleRefetchOnCount}
      />
      {!loading ? <AuthorsList authors={orderedAuthors} error={error} /> : <CenterLoader />}
    </>
  );
};

export default AllAuthorsPresenter;
