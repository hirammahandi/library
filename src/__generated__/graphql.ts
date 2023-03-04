/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, is compliant with the full-date format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for the representation of dates and times using the Gregorian calendar.
   *
   * This scalar is a description of the date, as used for birthdays for example. It cannot represent an instant on the timeline.
   */
  Date: any;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, is compliant with the date-time format outlined in section 5.6 of the RFC 3339
   * profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
   *
   * This scalar is a description of an exact instant on the timeline such as the instant that a user account was created.
   *
   * # Input Coercion
   *
   * When expected as an input type, only RFC 3339 compliant date-time strings are accepted. All other input values raise a query error indicating an incorrect type.
   *
   * # Result Coercion
   *
   * Where an RFC 3339 compliant date-time string has a time-zone other than UTC, it is shifted to UTC.
   * For example, the date-time string 2016-01-01T14:10:20+01:00 is shifted to 2016-01-01T13:10:20Z.
   */
  DateTime: any;
};

export type Author = {
  __typename?: 'Author';
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['Date']>;
  books?: Maybe<BookConnection>;
  /** when the model was created */
  createdAt: Scalars['DateTime'];
  /** Unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  review?: Maybe<Scalars['String']>;
  /** when the model was updated */
  updatedAt: Scalars['DateTime'];
};


export type AuthorBooksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
};

export type AuthorByInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  edges?: Maybe<Array<Maybe<AuthorEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Author */
export type AuthorCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  books?: InputMaybe<Array<InputMaybe<AuthorToBookCreateBookRelation>>>;
  name: Scalars['String'];
  review?: InputMaybe<Scalars['String']>;
};

export type AuthorCreatePayload = {
  __typename?: 'AuthorCreatePayload';
  author?: Maybe<Author>;
};

export type AuthorDeletePayload = {
  __typename?: 'AuthorDeletePayload';
  deletedId: Scalars['ID'];
};

export type AuthorEdge = {
  __typename?: 'AuthorEdge';
  cursor: Scalars['String'];
  node: Author;
};

export type AuthorOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Input to create a Author for the AuthorToBook relation of Book */
export type AuthorToBookCreateAuthor = {
  avatar?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  books?: InputMaybe<Array<InputMaybe<AuthorToBookCreateBookRelation>>>;
  name: Scalars['String'];
  review?: InputMaybe<Scalars['String']>;
};

/** Input to link to or create a Author for the AuthorToBook relation of Book */
export type AuthorToBookCreateAuthorRelation = {
  create?: InputMaybe<AuthorToBookCreateAuthor>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to create a Book for the AuthorToBook relation of Author */
export type AuthorToBookCreateBook = {
  authors?: InputMaybe<Array<InputMaybe<AuthorToBookCreateAuthorRelation>>>;
  cover: Scalars['String'];
  description: Scalars['String'];
  isbn: Scalars['String'];
  publicationYear: Scalars['Int'];
  title: Scalars['String'];
};

/** Input to link to or create a Book for the AuthorToBook relation of Author */
export type AuthorToBookCreateBookRelation = {
  create?: InputMaybe<AuthorToBookCreateBook>;
  link?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a Author for the AuthorToBook relation of Book */
export type AuthorToBookUpdateAuthorRelation = {
  create?: InputMaybe<AuthorToBookCreateAuthor>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to link/unlink to or create a Book for the AuthorToBook relation of Author */
export type AuthorToBookUpdateBookRelation = {
  create?: InputMaybe<AuthorToBookCreateBook>;
  link?: InputMaybe<Scalars['ID']>;
  unlink?: InputMaybe<Scalars['ID']>;
};

/** Input to update a Author */
export type AuthorUpdateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['Date']>;
  books?: InputMaybe<Array<InputMaybe<AuthorToBookUpdateBookRelation>>>;
  name?: InputMaybe<Scalars['String']>;
  review?: InputMaybe<Scalars['String']>;
};

export type AuthorUpdatePayload = {
  __typename?: 'AuthorUpdatePayload';
  author?: Maybe<Author>;
};

export type Book = {
  __typename?: 'Book';
  authors?: Maybe<AuthorConnection>;
  cover: Scalars['String'];
  /** when the model was created */
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  /** Unique identifier */
  id: Scalars['ID'];
  isbn: Scalars['String'];
  publicationYear: Scalars['Int'];
  title: Scalars['String'];
  /** when the model was updated */
  updatedAt: Scalars['DateTime'];
};


export type BookAuthorsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BookOrderByInput>;
};

export type BookByInput = {
  cover?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isbn?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BookConnection = {
  __typename?: 'BookConnection';
  edges?: Maybe<Array<Maybe<BookEdge>>>;
  /** Information to aid in pagination */
  pageInfo: PageInfo;
};

/** Input to create a Book */
export type BookCreateInput = {
  authors?: InputMaybe<Array<InputMaybe<AuthorToBookCreateAuthorRelation>>>;
  cover: Scalars['String'];
  description: Scalars['String'];
  isbn: Scalars['String'];
  publicationYear: Scalars['Int'];
  title: Scalars['String'];
};

export type BookCreatePayload = {
  __typename?: 'BookCreatePayload';
  book?: Maybe<Book>;
};

export type BookDeletePayload = {
  __typename?: 'BookDeletePayload';
  deletedId: Scalars['ID'];
};

export type BookEdge = {
  __typename?: 'BookEdge';
  cursor: Scalars['String'];
  node: Book;
};

export type BookOrderByInput = {
  createdAt?: InputMaybe<OrderByDirection>;
};

/** Input to update a Book */
export type BookUpdateInput = {
  authors?: InputMaybe<Array<InputMaybe<AuthorToBookUpdateAuthorRelation>>>;
  cover?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  isbn?: InputMaybe<Scalars['String']>;
  publicationYear?: InputMaybe<IntOperationsInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type BookUpdatePayload = {
  __typename?: 'BookUpdatePayload';
  book?: Maybe<Book>;
};

/** Possible operations for an Int field */
export type IntOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a Author */
  authorCreate?: Maybe<AuthorCreatePayload>;
  /** Delete a Author by ID or unique field */
  authorDelete?: Maybe<AuthorDeletePayload>;
  /** Update a Author */
  authorUpdate?: Maybe<AuthorUpdatePayload>;
  /** Create a Book */
  bookCreate?: Maybe<BookCreatePayload>;
  /** Delete a Book by ID or unique field */
  bookDelete?: Maybe<BookDeletePayload>;
  /** Update a Book */
  bookUpdate?: Maybe<BookUpdatePayload>;
};


export type MutationAuthorCreateArgs = {
  input: AuthorCreateInput;
};


export type MutationAuthorDeleteArgs = {
  by: AuthorByInput;
};


export type MutationAuthorUpdateArgs = {
  by: AuthorByInput;
  input: AuthorUpdateInput;
};


export type MutationBookCreateArgs = {
  input: BookCreateInput;
};


export type MutationBookDeleteArgs = {
  by: BookByInput;
};


export type MutationBookUpdateArgs = {
  by: BookByInput;
  input: BookUpdateInput;
};

export enum OrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Query a single Author by an ID or a unique field */
  author?: Maybe<Author>;
  /** Paginated query to fetch the whole list of `Author`. */
  authorCollection?: Maybe<AuthorConnection>;
  /** Query a single Book by an ID or a unique field */
  book?: Maybe<Book>;
  /** Paginated query to fetch the whole list of `Book`. */
  bookCollection?: Maybe<BookConnection>;
};


export type QueryAuthorArgs = {
  by: AuthorByInput;
};


export type QueryAuthorCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorOrderByInput>;
};


export type QueryBookArgs = {
  by: BookByInput;
};


export type QueryBookCollectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BookOrderByInput>;
};

export type AllAuthorsFragment = { __typename?: 'Author', avatar?: string | null, name: string, id: string };

export type GetAuthorFragment = { __typename?: 'Author', name: string, avatar?: string | null, birthday?: any | null, review?: string | null, id: string };

export type GetBooksForAuthorFragment = { __typename?: 'Book', title: string, id: string };

export type CreateAuthorMutationVariables = Exact<{
  input: AuthorCreateInput;
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', authorCreate?: { __typename?: 'AuthorCreatePayload', author?: { __typename?: 'Author', id: string } | null } | null };

export type DeleteAuthorByIdMutationVariables = Exact<{
  by: AuthorByInput;
}>;


export type DeleteAuthorByIdMutation = { __typename?: 'Mutation', authorDelete?: { __typename?: 'AuthorDeletePayload', deletedId: string } | null };

export type GetBooksForSelectQueryVariables = Exact<{
  bookFirst: Scalars['Int'];
}>;


export type GetBooksForSelectQuery = { __typename?: 'Query', bookCollection?: { __typename?: 'BookConnection', edges?: Array<{ __typename?: 'BookEdge', node: { __typename?: 'Book', title: string, id: string } } | null> | null } | null };

export type GetAllAuthorsQueryVariables = Exact<{
  firstAuthors: Scalars['Int'];
}>;


export type GetAllAuthorsQuery = { __typename?: 'Query', authorCollection?: { __typename?: 'AuthorConnection', edges?: Array<{ __typename?: 'AuthorEdge', node: { __typename?: 'Author', avatar?: string | null, name: string, id: string } } | null> | null } | null };

export type GetAuthorQueryVariables = Exact<{
  by: AuthorByInput;
  bookFirst: Scalars['Int'];
}>;


export type GetAuthorQuery = { __typename?: 'Query', author?: { __typename?: 'Author', name: string, avatar?: string | null, birthday?: any | null, review?: string | null, id: string, books?: { __typename?: 'BookConnection', edges?: Array<{ __typename?: 'BookEdge', node: { __typename?: 'Book', title: string, id: string } } | null> | null } | null } | null };

export type AllBooksFragment = { __typename?: 'Book', title: string, description: string, cover: string, id: string };

export type GetAuthorOfBookFragment = { __typename?: 'Author', id: string, name: string };

export type GetBookFragment = { __typename?: 'Book', id: string, cover: string, description: string, isbn: string, publicationYear: number, title: string };

export type DeleteBookByIdMutationVariables = Exact<{
  by: BookByInput;
}>;


export type DeleteBookByIdMutation = { __typename?: 'Mutation', bookDelete?: { __typename?: 'BookDeletePayload', deletedId: string } | null };

export type CreateBookMutationVariables = Exact<{
  input: BookCreateInput;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', bookCreate?: { __typename?: 'BookCreatePayload', book?: { __typename?: 'Book', id: string } | null } | null };

export type EditBookMutationVariables = Exact<{
  by: BookByInput;
  input: BookUpdateInput;
}>;


export type EditBookMutation = { __typename?: 'Mutation', bookUpdate?: { __typename?: 'BookUpdatePayload', book?: { __typename?: 'Book', id: string } | null } | null };

export type GetAllBooksQueryVariables = Exact<{
  bookFirst: Scalars['Int'];
  authorFirst: Scalars['Int'];
}>;


export type GetAllBooksQuery = { __typename?: 'Query', bookCollection?: { __typename?: 'BookConnection', edges?: Array<{ __typename?: 'BookEdge', node: { __typename?: 'Book', title: string, description: string, cover: string, id: string, authors?: { __typename?: 'AuthorConnection', edges?: Array<{ __typename?: 'AuthorEdge', node: { __typename?: 'Author', id: string, name: string } } | null> | null } | null } } | null> | null } | null };

export type GetBookQueryVariables = Exact<{
  by: BookByInput;
  first: Scalars['Int'];
}>;


export type GetBookQuery = { __typename?: 'Query', book?: { __typename?: 'Book', id: string, cover: string, description: string, isbn: string, publicationYear: number, title: string, authors?: { __typename?: 'AuthorConnection', edges?: Array<{ __typename?: 'AuthorEdge', node: { __typename?: 'Author', id: string, name: string } } | null> | null } | null } | null };

export type GetAuthorsForSelectQueryVariables = Exact<{
  firstAuthors: Scalars['Int'];
}>;


export type GetAuthorsForSelectQuery = { __typename?: 'Query', authorCollection?: { __typename?: 'AuthorConnection', edges?: Array<{ __typename?: 'AuthorEdge', node: { __typename?: 'Author', name: string, id: string } } | null> | null } | null };

export const AllAuthorsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"allAuthors"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<AllAuthorsFragment, unknown>;
export const GetAuthorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"getAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<GetAuthorFragment, unknown>;
export const GetBooksForAuthorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"getBooksForAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<GetBooksForAuthorFragment, unknown>;
export const AllBooksFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllBooks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<AllBooksFragment, unknown>;
export const GetAuthorOfBookFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"getAuthorOfBook"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GetAuthorOfBookFragment, unknown>;
export const GetBookFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"getBook"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}},{"kind":"Field","name":{"kind":"Name","value":"publicationYear"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<GetBookFragment, unknown>;
export const CreateAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthorCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateAuthorMutation, CreateAuthorMutationVariables>;
export const DeleteAuthorByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAuthorById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"by"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthorByInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"by"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletedId"}}]}}]}}]} as unknown as DocumentNode<DeleteAuthorByIdMutation, DeleteAuthorByIdMutationVariables>;
export const GetBooksForSelectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBooksForSelect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookFirst"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookFirst"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBooksForSelectQuery, GetBooksForSelectQueryVariables>;
export const GetAllAuthorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllAuthors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstAuthors"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstAuthors"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"allAuthors"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"allAuthors"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<GetAllAuthorsQuery, GetAllAuthorsQueryVariables>;
export const GetAuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAuthor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"by"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthorByInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookFirst"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"by"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"getAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"books"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookFirst"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"getBooksForAuthor"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"getAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"review"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"getBooksForAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<GetAuthorQuery, GetAuthorQueryVariables>;
export const DeleteBookByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteBookById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"by"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookByInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"by"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletedId"}}]}}]}}]} as unknown as DocumentNode<DeleteBookByIdMutation, DeleteBookByIdMutationVariables>;
export const CreateBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateBookMutation, CreateBookMutationVariables>;
export const EditBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"editBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"by"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookByInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"by"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<EditBookMutation, EditBookMutationVariables>;
export const GetAllBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllBooks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bookFirst"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorFirst"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bookFirst"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AllBooks"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorFirst"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"getAuthorOfBook"}}]}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AllBooks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"getAuthorOfBook"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GetAllBooksQuery, GetAllBooksQueryVariables>;
export const GetBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"by"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"BookByInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"book"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"by"},"value":{"kind":"Variable","name":{"kind":"Name","value":"by"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"getBook"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"getAuthorOfBook"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"getBook"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Book"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cover"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}},{"kind":"Field","name":{"kind":"Name","value":"publicationYear"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"getAuthorOfBook"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GetBookQuery, GetBookQueryVariables>;
export const GetAuthorsForSelectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAuthorsForSelect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstAuthors"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstAuthors"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAuthorsForSelectQuery, GetAuthorsForSelectQueryVariables>;