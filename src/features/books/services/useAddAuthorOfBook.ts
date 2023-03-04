import { useHandleFileInput } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authorToCreateSchema } from "../schemas";
import { FormAddAuthor } from "../types";
import { useEffect } from "react";

export const useAddAuthorOfBook = () => {
  const { file, handleFile } = useHandleFileInput();
  const {
    register,
    reset,
    getValues,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormAddAuthor>({
    defaultValues: {
      authorAvatar: "",
      authorName: "",
      authorReview: "",
    },
    resolver: zodResolver(authorToCreateSchema),
  });

  useEffect(() => {
    setValue("authorAvatar", file);
  }, [file, setValue]);

  return {
    values: { errorsAuthor: errors },
    actions: {
      registerAuthor: register,
      getAuthorsValues: getValues,
      resetAuthorValues: reset,
      handleSubmitAuthor: handleSubmit,
      clearAuthorErrors: clearErrors,
      handleAuthorAvatar: handleFile,
    },
  };
};
