import {
  AuthorToBookCreateAuthorRelation,
  CreateBookMutationVariables,
} from "@/__generated__/graphql";
import { useGetAuthorsForSelect, useHandleFileInput } from "@/hooks";
import { ApolloError, useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CREATE_BOOK, GET_ALL_BOOKS_QUERY } from "../graphql";
import { bookSchema } from "../schemas";
import { AuthorsToCreate, FormAddAuthor, FormBookData } from "../types";
import { useAddAuthorOfBook } from "./useAddAuthorOfBook";

export const useCreateBook = () => {
  const [isAddAuthorActive, setIsAddAuthorActive] = useState(false);
  const { file, handleFile } = useHandleFileInput();
  const controller = useRef(new AbortController());

  const {
    values: { authorsOptions },
  } = useGetAuthorsForSelect();

  const [createBook, { loading, error: errorResponse }] = useMutation(CREATE_BOOK, {
    context: { fetchOptions: { signal: controller.current.signal } },
  });

  const {
    values: { errorsAuthor },
    actions: {
      registerAuthor,
      resetAuthorValues,
      handleSubmitAuthor,
      clearAuthorErrors,
      handleAuthorAvatar,
    },
  } = useAddAuthorOfBook();

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    setError,
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
    resetAuthorValues({
      authorAvatar: "",
      authorName: "",
      authorReview: "",
    });
  };

  const handleCreateBook = async (data: FormBookData) => {
    try {
      const { authorsId, authorToCreate, title, cover, description, isbn, year } = data;
      if (!authorsId?.length && !authorToCreate?.length)
        return setError("authorsId", {
          message: "Select at least one author or add one",
          type: "required",
        });

      const authorsLinks = authorsId.map<{ link: string }>(({ value }) => ({ link: value }));
      const authorAdded = authorToCreate.map<AuthorsToCreate>(
        ({ authorAvatar, authorBirthday, authorName, authorReview }) => ({
          create: {
            name: authorName,
            avatar: authorAvatar,
            birthday: authorBirthday,
            review: authorReview,
          },
        })
      );

      let authors: AuthorToBookCreateAuthorRelation[] = [];

      if (authorsLinks.length && authorAdded.length) authors = [...authorsLinks, ...authorAdded];
      else if (authorsLinks.length) authors = authorsLinks;
      else if (authorAdded.length) authors = authorAdded;

      const variables: CreateBookMutationVariables = {
        input: {
          title,
          description,
          isbn,
          publicationYear: year,
          cover,
          authors,
        },
      };

      await createBook({
        variables: { ...variables },
        refetchQueries: [
          {
            query: GET_ALL_BOOKS_QUERY,
            variables: {
              authorFirst: 5,
              bookFirst: 5,
            },
          },
          "getAllBooks",
        ],
      });
      reset();
      resetAuthorValues();
      toast.success("Book has been created successfully", { position: "top-right" });
    } catch (error) {
      let message = "An error has ocurred";
      if (error instanceof ApolloError) {
        message = error.message.includes("cover")
          ? "The cover has been already used"
          : error.message;
      }
      if ((error as { name: string }).name !== "AbortError")
        toast.error(message, { position: "top-right" });
    }
  };

  const handleCancel = () => {
    reset();
    resetAuthorValues();
    if (loading) {
      controller.current.abort();
    }
  };

  return {
    values: {
      isAddAuthorActive,
      authorsOptions,
      errors,
      control,
      errorsAuthor,
      loading,
      errorResponse,
    },
    actions: {
      handleIsAddAuthorActive,
      register,
      handleSubmit,
      handleCreateBook,
      handleFile,
      registerAuthor,
      handleAddAuthorToCreate,
      handleSubmitAuthor,
      handleAuthorAvatar,
      handleCancel,
    },
  };
};
