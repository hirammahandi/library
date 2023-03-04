import {
  AuthorToBookCreateBookRelation,
  CreateAuthorMutationVariables,
} from "@/__generated__/graphql";
import { useHandleFileInput } from "@/hooks";
import { ApolloError, useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CREATE_AUTHOR, GET_ALL_AUTHORS } from "../graphql";
import { authorSchema } from "../schema";
import { FormAddBook, FormAuthorData } from "../types";
import { useBookOfAuthor } from "./useAddBookOfAtuhor";
import { useGetBooksForSelect } from "./useGetBooksForSelect";

export const useCreateAuthor = () => {
  const [isAddBookActive, setIsAddBookActive] = useState(false);
  const { file: avatarFile, handleFile: handleAvatarFile } = useHandleFileInput();
  const controller = useRef(new AbortController());
  const {
    values: { booksOptions },
  } = useGetBooksForSelect();

  const [createAuthor, { loading, error: errorResponse }] = useMutation(CREATE_AUTHOR, {
    context: { fetchOptions: { signal: controller.current.signal } },
  });

  const {
    values: { errorsBook },
    actions: {
      clearBookErrors,
      getBooksValues,
      handleBookCover,
      handleSubmitBook,
      registerBook,
      resetBookValues,
    },
  } = useBookOfAuthor();

  const {
    control,
    register,
    handleSubmit,
    reset,
    setValue,
    setError,
    getValues,
    formState: { errors },
  } = useForm<FormAuthorData>({
    defaultValues: {
      authorAvatar: "",
      authorName: "",
      authorReview: "",
      bookToCreate: [],
    },
    resolver: zodResolver(authorSchema),
  });

  useEffect(() => {
    setValue("authorAvatar", avatarFile);
  }, [avatarFile, setValue]);

  const handleIsAddBookActive = () => {
    if (isAddBookActive && Object.keys(errorsBook).length) clearBookErrors();
    setIsAddBookActive(!isAddBookActive);
  };

  const handleAddBookToCreate = (data: FormAddBook) => {
    const bookToCreate = getValues("bookToCreate");
    setValue("bookToCreate", [...bookToCreate, data]);
    resetBookValues({
      cover: "",
      description: "",
      isbn: "",
      title: "",
      year: 0,
    });
  };

  const handleCreateAuthor = async (data: FormAuthorData) => {
    try {
      const { booksId, bookToCreate, authorAvatar, authorBirthday, authorName, authorReview } =
        data;

      if (!booksId?.length && !bookToCreate?.length)
        return setError("booksId", {
          message: "Select at least one book or add one",
          type: "required",
        });

      const booksLinks = booksId.map<{ link: string }>(({ value }) => ({ link: value }));

      const addedBooks = bookToCreate.map(({ cover, description, isbn, title, year }) => ({
        create: {
          cover,
          description,
          isbn,
          publicationYear: year,
          title,
        },
      }));

      let books: AuthorToBookCreateBookRelation[] = [];

      if (booksLinks.length && addedBooks.length) books = [...booksLinks, ...addedBooks];
      else if (booksLinks.length) books = booksLinks;
      else if (addedBooks.length) books = addedBooks;

      const variables: CreateAuthorMutationVariables = {
        input: {
          name: authorName,
          avatar: authorAvatar,
          birthday: authorBirthday,
          review: authorReview,
          books,
        },
      };
      await createAuthor({
        variables: { ...variables },
        refetchQueries: [
          {
            query: GET_ALL_AUTHORS,
            variables: {
              firstAuthors: 5,
            },
          },
          "getAllAuthors",
        ],
      });
      reset();
      resetBookValues();
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
    resetBookValues();
    if (loading) {
      controller.current.abort();
    }
  };

  return {
    values: { control, isAddBookActive, booksOptions, errors, loading, errorResponse, errorsBook },
    actions: {
      handleIsAddBookActive,
      register,
      handleSubmit,
      handleCreateAuthor,
      handleAvatarFile,
      clearBookErrors,
      getBooksValues,
      handleBookCover,
      handleSubmitBook,
      registerBook,
      resetBookValues,
      handleAddBookToCreate,
      handleCancel,
    },
  };
};
