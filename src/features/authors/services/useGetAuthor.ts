import { useRouter } from "next/router";
import { DELETE_AUTHOR_BY_ID, GET_ALL_AUTHORS, GET_AUTHOR } from "../graphql";
import { useMutation, useQuery } from "@apollo/client";
import { MutationAuthorDeleteArgs } from "@/__generated__/graphql";
import { toast } from "react-toastify";
import { useSetCount } from "@/hooks";

export const useGetAuthor = () => {
  const router = useRouter();
  const authorId = router.query.authorId as string;
  const { count, handleChangeCount } = useSetCount();

  const { data, refetch } = useQuery(GET_AUTHOR, {
    variables: {
      by: {
        id: authorId,
      },
      bookFirst: 5,
    },
  });

  const author = data?.author;

  const [deleteAuthor, { loading }] = useMutation(DELETE_AUTHOR_BY_ID);

  const handleDeleteAuthorById = async (id: string) => {
    try {
      const variables: MutationAuthorDeleteArgs = {
        by: {
          id,
        },
      };

      await deleteAuthor({
        variables,
        refetchQueries: [
          {
            query: GET_ALL_AUTHORS,
          },
          "getAllAuthors",
        ],
      });
    } catch (error) {
      toast.error("An error has ocurred", { position: "top-right" });
    }
    await router.push("/authors");
  };

  const handleRefetchOnCount = (count: number) => {
    handleChangeCount(count, () => {
      refetch({
        bookFirst: count,
        by: {
          id: authorId,
        },
      });
    });
  };

  return {
    values: { author, loading, count },
    actions: { handleDeleteAuthorById, handleRefetchOnCount },
  };
};
