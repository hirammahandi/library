import { Flex, Loader } from "../ui/atoms";

const CenterLoader = () => (
  <Flex justifyContent="center">
    <Loader size={50} />
  </Flex>
);

export default CenterLoader;
