import { useRouter } from "next/router";
import { ReactNode, createContext, useDeferredValue, useEffect, useState } from "react";

export type OrderBy = "ASC" | "DESC";

type GlobalContextProps = {
  searchValue: string;
  deferredSearchValue: string;
  orderBy: OrderBy;
  handleChangeSearchValue: (value: string) => void;
  handleChangeOrderBy: (value: OrderBy) => void;
};

export const GlobalContext = createContext({} as GlobalContextProps);

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState("");
  const [orderBy, setOrderBy] = useState<OrderBy>("ASC");

  const router = useRouter();

  useEffect(() => {
    if (["/books", "/authors"].includes(router.asPath)) setOrderBy("ASC");
  }, [router.asPath]);

  const deferredSearchValue = useDeferredValue(searchValue);

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const handleChangeOrderBy = (value: OrderBy) => {
    setOrderBy(value);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchValue,
        deferredSearchValue,
        orderBy,
        handleChangeSearchValue,
        handleChangeOrderBy,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
