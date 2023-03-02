import { gql } from "@/__generated__/gql";

export const ALL_BOOKS_FRAGMENT = gql(`
  fragment AllBooksFragment on Book {
    title
    description
    cover
    id
  }
`);

export const AUTHOR_OF_BOOK_FRAGMENT = gql(`
  fragment getAuthorOfBookFragment on Author {
    id
    name
  }
`);

export const BOOK_FRAGMENT = gql(`
  fragment getBookFragment on Book {
    id
    cover
    description
    isbn
    publicationYear
    title
  }
`);
