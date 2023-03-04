import { z } from "zod";
import { authorToCreateSchema, bookSchema } from "../schemas";

export type FormBookData = z.infer<typeof bookSchema>;
export type FormAddAuthor = z.infer<typeof authorToCreateSchema>;
