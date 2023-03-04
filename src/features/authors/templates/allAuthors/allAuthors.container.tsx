import React from "react";
import AllAuthorsPresenter from "./allAuthors.presenter";
import { useGetAllAuthors } from "../../services";

const AllAuthorsContainer = () => {
  const allAuthorsModel = useGetAllAuthors();

  return <AllAuthorsPresenter model={allAuthorsModel} />;
};

export default AllAuthorsContainer;
