import { gql } from "@/__generated__/gql";

export const GET_BOOKS_FOR_SELECT = gql(`
  query getBooksForSelect($bookFirst: Int!) {
    bookCollection(first: $bookFirst) {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`);

export const GET_ALL_AUTHORS = gql(`
  query getAllAuthors($firstAuthors: Int!) {
    authorCollection(first: $firstAuthors) {
      edges {
        node {
          ...allAuthors
        }
      }
    }
}`);

export const GET_AUTHOR = gql(`
  query getAuthor($by: AuthorByInput!, $bookFirst: Int!) {
    author(by: $by) {
      ...getAuthor
      books(first: $bookFirst) {
        edges {
          node {
            ...getBooksForAuthor
          }
        }
      }
    }
  }
`);
