import { AuthorConnection } from "@/__generated__/graphql";
import { FC } from "react";
import { Flex, TextCenter } from "../ui/atoms";
import { AuthorCard } from "../molecules";

type AuthorsListProps = {
  authors: AuthorConnection["edges"];
  error?: unknown;
};
const AuthorsList: FC<AuthorsListProps> = ({ authors, error }) => {
  return (
    <Flex gap={20} gutterBottom>
      {authors && Boolean(authors.length) && !error ? (
        authors.map((value) => <AuthorCard key={value!.node.id} author={value!.node} />)
      ) : (
        <TextCenter>Not Authors to display</TextCenter>
      )}
    </Flex>
  );
};

export default AuthorsList;
