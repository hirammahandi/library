import { gql } from "@/__generated__/gql";

export const ALL_BOOKS_FRAGMENT = gql(`
  fragment AllBooks on Book {
    title
    description
    cover
    id
  }
`);

export const AUTHOR_OF_BOOK_FRAGMENT = gql(`
  fragment getAuthorOfBook on Author {
    id
    name
  }
`);

export const BOOK_FRAGMENT = gql(`
  fragment getBook on Book {
    id
    cover
    description
    isbn
    publicationYear
    title
  }
`);
