import { gql } from "@/__generated__";

export const ALL_AUTHORS_FRAGMENT = gql(`
    fragment allAuthors on Author {
        avatar
        name
        id
    }
`);

export const GET_AUTHOR_FRAGMENT = gql(`
    fragment getAuthor on Author {
        name
        avatar
        birthday
        review
        id
    }   
`);

export const GET_BOOKS_FOR_AUTHOR_FRAGMENT = gql(`
    fragment getBooksForAuthor on Book {
        title
        id
    }
`);
