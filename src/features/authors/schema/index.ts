import { z } from "zod";

export const bookToCreateSchema = z.object({
  title: z.string().min(1),
  isbn: z
    .string()
    .length(13, "ISBN must contain exactly 13 characters")
    .refine((val) => !isNaN(Number(val)), "Can't contain letters"),
  cover: z.string().min(1, "Cover is required"),
  year: z.number({ invalid_type_error: "This field is required" }).positive(),
  description: z.string().min(1),
});

export const authorSchema = z.object({
  authorName: z.string().min(1),
  authorBirthday: z.string().refine((val) => {
    return !isNaN(Date.parse(new Date(val).toString()));
  }, "Select a valid date"),
  authorAvatar: z.string().min(1),
  authorReview: z.string().min(1),
  booksId: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .array(),
  bookToCreate: bookToCreateSchema.array(),
});
