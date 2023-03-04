import { useForm } from "react-hook-form";
import { FormAddAuthor } from "../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { authorToCreateSchema } from "../schemas";

export const useAddAuthorOfBook = () => {
  const {
    register,
    reset,
    getValues,
    handleSubmit,
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

  return {
    values: { errorsAuthor: errors },
    actions: {
      registerAuthor: register,
      getAuthorsValues: getValues,
      resetAuthorValues: reset,
      handleSubmitAuthor: handleSubmit,
      clearAuthorErrors: clearErrors,
    },
  };
};
