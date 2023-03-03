import { gql } from "@/__generated__/gql";

export const GET_ALL_BOOKS_QUERY = gql(`
  query getAllBooks($bookFirst: Int!, $authorFirst: Int!) {
    bookCollection(first: $bookFirst) {
      edges {
        node {
          ...AllBooks
          authors(first: $authorFirst) {
            edges {
              node {
                ...getAuthorOfBook
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
      ...getBook
      authors(first: $first) {
        edges {
          node {
            ...getAuthorOfBook
          }
        }
      }
    }
}
`);
