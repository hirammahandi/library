import { useHandleFileInput } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { bookToCreateSchema } from "../schema";
import { FormAddBook } from "../types";

export const useBookOfAuthor = () => {
  const { file, handleFile } = useHandleFileInput();
  const {
    register,
    reset,
    getValues,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormAddBook>({
    defaultValues: {
      title: "",
      description: "",
      isbn: "",
      cover: "",
      year: 0,
    },
    resolver: zodResolver(bookToCreateSchema),
  });

  useEffect(() => {
    setValue("cover", file);
  }, [file, setValue]);

  return {
    values: { errorsBook: errors },
    actions: {
      registerBook: register,
      getBooksValues: getValues,
      resetBookValues: reset,
      handleSubmitBook: handleSubmit,
      clearBookErrors: clearErrors,
      handleBookCover: handleFile,
    },
  };
};
