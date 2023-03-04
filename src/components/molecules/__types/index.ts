import { GetAuthorOfBookFragment, GetBooksForAuthorFragment } from "@/__generated__/graphql";

export type AuthorOfBook = { node: GetAuthorOfBookFragment }[];
export type BookOfAuthor = { node: GetBooksForAuthorFragment }[];
