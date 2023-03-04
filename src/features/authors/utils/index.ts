import { AuthorConnection } from "@/__generated__/graphql";
import { OrderBy } from "@/context";

export const orderAuthors = (orderBy: OrderBy, filteredAuthors: AuthorConnection["edges"]) => {
  return filteredAuthors?.slice()?.sort((a, b) => {
    const nameA = a?.node.name.toLowerCase();
    const nameB = b?.node.name.toLowerCase();

    if (nameA && nameB) {
      if (nameA < nameB) return orderBy === "ASC" ? -1 : 1;
      if (nameB < nameA) return orderBy === "ASC" ? 1 : -1;
    }
    return 0;
  });
};
