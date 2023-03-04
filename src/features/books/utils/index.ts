import { BookConnection } from "@/__generated__/graphql";
import { OrderBy } from "@/context";

export const orderBooks = (orderBy: OrderBy, filteredBooks: BookConnection["edges"]) => {
  return filteredBooks?.slice()?.sort((a, b) => {
    const titleA = a?.node.title.toLowerCase();
    const titleB = b?.node.title.toLowerCase();

    if (titleA && titleB) {
      if (titleA < titleB) return orderBy === "ASC" ? -1 : 1;
      if (titleB < titleA) return orderBy === "ASC" ? 1 : -1;
    }
    return 0;
  });
};
