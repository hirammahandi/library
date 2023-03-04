import { useGlobalState } from "@/hooks";
import { Flex } from "../ui/atoms";
import TextInput from "./TextInput";
import { memo } from "react";

const SearchBar = () => {
  const { handleChangeSearchValue } = useGlobalState();

  return (
    <Flex justifyContent="center" alignItems="center" gap={10} gutterBottom>
      <TextInput
        width={300}
        placeholder="Search..."
        type="search"
        onChange={({ target }) => handleChangeSearchValue(target.value)}
      />
    </Flex>
  );
};

export default memo(SearchBar);
