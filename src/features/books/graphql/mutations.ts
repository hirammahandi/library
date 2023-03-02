import { gql } from "@/__generated__/gql";

export const DELETE_BOOK_BY_ID = gql(`
  mutation deleteBookById($by: BookByInput!) {
    bookDelete(by: $by) {
      deletedId
    }
  }
`);

export const CREATE_BOOK = gql(`
  mutation createBook($input: BookCreateInput!) {
    bookCreate(input: $input) {
      book {
        id
      }
    }
  }
`);

export const EDIT_BOOK = gql(`
  mutation editBook($by:BookByInput!, $input:BookUpdateInput!){
    bookUpdate(by:$by, input:$input){
      book{
        id
      }
    }
  }
`);
