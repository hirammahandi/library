import { Flex, TextInput, Button } from "../ui/atoms";

const SearchBar = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={10} gutterBottom>
      <TextInput width={300} placeholder="Search.." type="search" />
      <Button variant="outlined" color="primary" type="button">
        Search
      </Button>
    </Flex>
  );
};

export default SearchBar;
