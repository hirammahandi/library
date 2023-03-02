import { gql } from "@/__generated__";

export const CREATE_AUTHOR = gql(`
    mutation createAuthor($input:AuthorCreateInput!){
        authorCreate(input:$input){
            author{
                id
            }
        }
    }
`);

export const DELETE_AUTHOR_BY_ID = gql(`
    mutation deleteAuthorById($by:AuthorByInput!){
        authorDelete(by:$by){
            deletedId
        }
    }
`);

export const EDIT_AUTHOR = gql(`
    mutation deleteAuthorById($by:AuthorByInput!){
        authorDelete(by:$by){
            deletedId
        }
    }
`);
