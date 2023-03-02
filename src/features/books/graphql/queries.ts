import { gql } from "@/__generated__/gql";

export const GET_ALL_BOOKS_QUERY = gql(`
  query getAllBooks($bookFirst: Int!, $authorFirst: Int!) {
    bookCollection(first: $bookFirst) {
      edges {
        node {
          ...AllBooksFragment
          authors(first: $authorFirst) {
            edges {
              node {
                ...getAuthorOfBookFragment
              }
            }
          }
        }
      }
    }
  }
`);

export const GET_BOOK_BY_ID = gql(`
  query GetBook($by: BookByInput!, $first: Int!) {
    book(by: $by) {
      ...getBookFragment
      authors(first: $first) {
        edges {
          node {
            ...getAuthorOfBookFragment
          }
        }
      }
    }
}
`);
