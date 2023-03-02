export type Data<T, K extends KeyProp, M extends Method> = {
  [key in M extends "Create"
    ? `${K}${M}`
    : M extends "Update"
    ? `${K}${M}`
    : M extends "Delete"
    ? `${K}${M}`
    : M extends "Collection"
    ? `${K}${M}`
    : K]: {
    edges: Edge<T>[];
  };
};

export type NestedData<T> = {
  edges: Edge<T>[];
};

type Edge<T> = {
  node: T;
};

type KeyProp = "book" | "author";

type Method = "Create" | "Update" | "Delete" | "Collection" | void;

const a: Data<
  { name: string; authors: NestedData<{ authorId: string }> },
  "book",
  void
> = {
  book: {
    edges: [
      {
        node: {
          name: "asd",
          authors: {
            edges: [{ node: { authorId: "lalala" } }],
          },
        },
      },
    ],
  },
};
