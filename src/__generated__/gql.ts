/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment allAuthors on Author {\n        avatar\n        name\n        id\n    }\n": types.AllAuthorsFragmentDoc,
    "\n    fragment getAuthor on Author {\n        name\n        avatar\n        birthday\n        review\n        id\n    }   \n": types.GetAuthorFragmentDoc,
    "\n    fragment getBooksForAuthor on Book {\n        title\n        id\n    }\n": types.GetBooksForAuthorFragmentDoc,
    "\n    mutation createAuthor($input:AuthorCreateInput!){\n        authorCreate(input:$input){\n            author{\n                id\n            }\n        }\n    }\n": types.CreateAuthorDocument,
    "\n    mutation deleteAuthorById($by:AuthorByInput!){\n        authorDelete(by:$by){\n            deletedId\n        }\n    }\n": types.DeleteAuthorByIdDocument,
    "\n  query getAuthorsForSelect($firstAuthors: Int) {\n    authorCollection(first: $firstAuthors) {\n      edges {\n        node {\n          name\n          id\n        }\n      }\n    }\n  }\n": types.GetAuthorsForSelectDocument,
    "\n  query getAllAuthors {\n    authorCollection(first: 100) {\n      edges {\n        node {\n          ...allAuthors\n        }\n      }\n    }\n}": types.GetAllAuthorsDocument,
    "\n  query getAuthor($by: AuthorByInput!, $bookFirst: Int!) {\n    author(by: $by) {\n      ...getAuthor\n      books(first: $bookFirst) {\n        edges {\n          node {\n            ...getBooksForAuthor\n          }\n        }\n      }\n    }\n  }\n": types.GetAuthorDocument,
    "\n  fragment AllBooks on Book {\n    title\n    description\n    cover\n    id\n  }\n": types.AllBooksFragmentDoc,
    "\n  fragment getAuthorOfBook on Author {\n    id\n    name\n  }\n": types.GetAuthorOfBookFragmentDoc,
    "\n  fragment getBook on Book {\n    id\n    cover\n    description\n    isbn\n    publicationYear\n    title\n  }\n": types.GetBookFragmentDoc,
    "\n  mutation deleteBookById($by: BookByInput!) {\n    bookDelete(by: $by) {\n      deletedId\n    }\n  }\n": types.DeleteBookByIdDocument,
    "\n  mutation createBook($input: BookCreateInput!) {\n    bookCreate(input: $input) {\n      book {\n        id\n      }\n    }\n  }\n": types.CreateBookDocument,
    "\n  mutation editBook($by:BookByInput!, $input:BookUpdateInput!){\n    bookUpdate(by:$by, input:$input){\n      book{\n        id\n      }\n    }\n  }\n": types.EditBookDocument,
    "\n  query getAllBooks($bookFirst: Int!, $authorFirst: Int!) {\n    bookCollection(first: $bookFirst) {\n      edges {\n        node {\n          ...AllBooks\n          authors(first: $authorFirst) {\n            edges {\n              node {\n                ...getAuthorOfBook\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAllBooksDocument,
    "\n  query GetBook($by: BookByInput!, $first: Int!) {\n    book(by: $by) {\n      ...getBook\n      authors(first: $first) {\n        edges {\n          node {\n            ...getAuthorOfBook\n          }\n        }\n      }\n    }\n}\n": types.GetBookDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment allAuthors on Author {\n        avatar\n        name\n        id\n    }\n"): (typeof documents)["\n    fragment allAuthors on Author {\n        avatar\n        name\n        id\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment getAuthor on Author {\n        name\n        avatar\n        birthday\n        review\n        id\n    }   \n"): (typeof documents)["\n    fragment getAuthor on Author {\n        name\n        avatar\n        birthday\n        review\n        id\n    }   \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment getBooksForAuthor on Book {\n        title\n        id\n    }\n"): (typeof documents)["\n    fragment getBooksForAuthor on Book {\n        title\n        id\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation createAuthor($input:AuthorCreateInput!){\n        authorCreate(input:$input){\n            author{\n                id\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation createAuthor($input:AuthorCreateInput!){\n        authorCreate(input:$input){\n            author{\n                id\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation deleteAuthorById($by:AuthorByInput!){\n        authorDelete(by:$by){\n            deletedId\n        }\n    }\n"): (typeof documents)["\n    mutation deleteAuthorById($by:AuthorByInput!){\n        authorDelete(by:$by){\n            deletedId\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAuthorsForSelect($firstAuthors: Int) {\n    authorCollection(first: $firstAuthors) {\n      edges {\n        node {\n          name\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAuthorsForSelect($firstAuthors: Int) {\n    authorCollection(first: $firstAuthors) {\n      edges {\n        node {\n          name\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllAuthors {\n    authorCollection(first: 100) {\n      edges {\n        node {\n          ...allAuthors\n        }\n      }\n    }\n}"): (typeof documents)["\n  query getAllAuthors {\n    authorCollection(first: 100) {\n      edges {\n        node {\n          ...allAuthors\n        }\n      }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAuthor($by: AuthorByInput!, $bookFirst: Int!) {\n    author(by: $by) {\n      ...getAuthor\n      books(first: $bookFirst) {\n        edges {\n          node {\n            ...getBooksForAuthor\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAuthor($by: AuthorByInput!, $bookFirst: Int!) {\n    author(by: $by) {\n      ...getAuthor\n      books(first: $bookFirst) {\n        edges {\n          node {\n            ...getBooksForAuthor\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment AllBooks on Book {\n    title\n    description\n    cover\n    id\n  }\n"): (typeof documents)["\n  fragment AllBooks on Book {\n    title\n    description\n    cover\n    id\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment getAuthorOfBook on Author {\n    id\n    name\n  }\n"): (typeof documents)["\n  fragment getAuthorOfBook on Author {\n    id\n    name\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment getBook on Book {\n    id\n    cover\n    description\n    isbn\n    publicationYear\n    title\n  }\n"): (typeof documents)["\n  fragment getBook on Book {\n    id\n    cover\n    description\n    isbn\n    publicationYear\n    title\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteBookById($by: BookByInput!) {\n    bookDelete(by: $by) {\n      deletedId\n    }\n  }\n"): (typeof documents)["\n  mutation deleteBookById($by: BookByInput!) {\n    bookDelete(by: $by) {\n      deletedId\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createBook($input: BookCreateInput!) {\n    bookCreate(input: $input) {\n      book {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createBook($input: BookCreateInput!) {\n    bookCreate(input: $input) {\n      book {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation editBook($by:BookByInput!, $input:BookUpdateInput!){\n    bookUpdate(by:$by, input:$input){\n      book{\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation editBook($by:BookByInput!, $input:BookUpdateInput!){\n    bookUpdate(by:$by, input:$input){\n      book{\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getAllBooks($bookFirst: Int!, $authorFirst: Int!) {\n    bookCollection(first: $bookFirst) {\n      edges {\n        node {\n          ...AllBooks\n          authors(first: $authorFirst) {\n            edges {\n              node {\n                ...getAuthorOfBook\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllBooks($bookFirst: Int!, $authorFirst: Int!) {\n    bookCollection(first: $bookFirst) {\n      edges {\n        node {\n          ...AllBooks\n          authors(first: $authorFirst) {\n            edges {\n              node {\n                ...getAuthorOfBook\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBook($by: BookByInput!, $first: Int!) {\n    book(by: $by) {\n      ...getBook\n      authors(first: $first) {\n        edges {\n          node {\n            ...getAuthorOfBook\n          }\n        }\n      }\n    }\n}\n"): (typeof documents)["\n  query GetBook($by: BookByInput!, $first: Int!) {\n    book(by: $by) {\n      ...getBook\n      authors(first: $first) {\n        edges {\n          node {\n            ...getAuthorOfBook\n          }\n        }\n      }\n    }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;