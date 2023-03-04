import { GET_AUTHORS_FOR_SELECT } from "@/features/authors";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";

export const useGetAuthorsForSelect = () => {
  const { data } = useQuery(GET_AUTHORS_FOR_SELECT, {
    variables: {
      firstAuthors: 100,
    },
  });

  const authors = data?.authorCollection?.edges;

  const authorsOptions = useMemo(
    () =>
      authors && authors.length
        ? authors.map<{ value: string; label: string }>((author) => ({
            value: author!.node.id,
            label: author!.node.name,
          }))
        : [],
    [authors]
  );

  return {
    values: { authorsOptions },
  };
};
