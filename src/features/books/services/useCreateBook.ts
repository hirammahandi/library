import { useGetAuthorsForSelect, useHandleFileInput } from "@/hooks";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CREATE_BOOK } from "../graphql";
import { bookSchema } from "../schemas";
import { FormAddAuthor, FormBookData } from "../types";
import { useAddAuthorOfBook } from "./useAddAuthorOfBook";

export const useCreateBook = () => {
  const [isAddAuthorActive, setIsAddAuthorActive] = useState(false);
  const { file, handleFile } = useHandleFileInput();
  const {
    values: { authorsOptions },
  } = useGetAuthorsForSelect();
  const [createBook, { loading }] = useMutation(CREATE_BOOK);
  const {
    values: { errorsAuthor },
    actions: { registerAuthor, resetAuthorValues, handleSubmitAuthor, clearAuthorErrors },
  } = useAddAuthorOfBook();

  const {
    register,
    control,
    handleSubmit,
    reset,
    resetField,
    setValue,
    setError,
    watch,
    getValues,
    formState: { errors },
  } = useForm<FormBookData>({
    defaultValues: {
      title: "",
      authorsId: [],
      cover: "",
      isbn: "",
      description: "",
      year: 0,
      authorToCreate: [],
    },
    resolver: zodResolver(bookSchema),
  });

  useEffect(() => {
    setValue("cover", file);
  }, [file, setValue]);

  const handleIsAddAuthorActive = () => {
    if (isAddAuthorActive && Object.keys(errorsAuthor).length) clearAuthorErrors();
    setIsAddAuthorActive(!isAddAuthorActive);
  };

  const handleAddAuthorToCreate = (data: FormAddAuthor) => {
    const authorsToCreate = getValues("authorToCreate");
    setValue("authorToCreate", [...authorsToCreate, data]);
    resetAuthorValues();
  };

  const handleCreateBook = (data: FormBookData) => {
    const { authorsId, authorToCreate } = data;
    if (!authorsId?.length && !authorToCreate?.length)
      return setError("authorsId", {
        message: "Select at least one author or add one",
        type: "required",
      });
  };

  return {
    values: { isAddAuthorActive, authorsOptions, errors, control, errorsAuthor },
    actions: {
      handleIsAddAuthorActive,
      register,
      handleSubmit,
      handleCreateBook,
      handleFile,
      registerAuthor,
      handleAddAuthorToCreate,
      handleSubmitAuthor,
    },
  };
};
