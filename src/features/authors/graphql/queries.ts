import { gql } from "@/__generated__/gql";

export const GET_AUTHORS_FOR_SELECT = gql(`
  query getAuthorsForSelect($firstAuthors: Int) {
    authorCollection(first: $firstAuthors) {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`);

export const GET_ALL_AUTHORS = gql(`
  query getAllAuthors {
    authorCollection(first: 100) {
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
