import { AuthorToBookCreateAuthor } from "@/__generated__/graphql";
import { z } from "zod";
import { authorToCreateSchema, bookSchema } from "../schemas";

export type FormBookData = z.infer<typeof bookSchema>;
export type FormAddAuthor = z.infer<typeof authorToCreateSchema>;

export type AuthorsToCreate = {
  create: Omit<AuthorToBookCreateAuthor, "books">;
};
