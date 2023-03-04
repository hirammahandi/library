import { CenterLoader } from "@/components/molecules";
import BookList from "@/components/organism/BookList";
import { FC } from "react";
import { useGetAllBooks } from "../../services";
import { SelectCount } from "@/components/ui/atoms";

type BookPresenterProps = {
  model: ReturnType<typeof useGetAllBooks>;
};

const BookPresenter: FC<BookPresenterProps> = ({ model: { values, actions } }) => {
  const { loading, error, count, filterBooks } = values;
  const { handleRefetchOnCount } = actions;

  return (
    <>
      <SelectCount
        countValue={count}
        loading={loading && !error}
        handleRefetchOnCount={handleRefetchOnCount}
      />
      {!loading ? <BookList books={filterBooks} error={error} /> : <CenterLoader />}
    </>
  );
};

export default BookPresenter;
