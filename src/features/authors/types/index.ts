import { z } from "zod";
import { authorSchema, bookToCreateSchema } from "../schema";
import { AuthorToBookCreateBook } from "@/__generated__/graphql";

export type FormAuthorData = z.infer<typeof authorSchema>;
export type FormAddBook = z.infer<typeof bookToCreateSchema>;

export type BooksToCreate = {
  create: Omit<AuthorToBookCreateBook, "authors">;
};
