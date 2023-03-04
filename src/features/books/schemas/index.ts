import { z } from "zod";

export const authorToCreateSchema = z.object({
  authorName: z.string().min(1),
  authorBirthday: z.date(),
  authorAvatar: z.string().min(1),
  authorReview: z.string().min(1),
});

export const bookSchema = z
  .object({
    title: z.string().min(1),
    isbn: z
      .string()
      .length(13)
      .refine((val) => !isNaN(Number(val)), "Can't contain letters"),
    cover: z.string().min(1, "Cover is required"),
    year: z.number({ invalid_type_error: "This field is required" }).positive(),
    description: z.string().min(1),
    authorsId: z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .array(),
    authorToCreate: authorToCreateSchema.array(),
  })
  .required();
