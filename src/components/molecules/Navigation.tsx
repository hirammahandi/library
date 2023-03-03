import Link from "next/link";
import { Flex, Button, Divider } from "../ui/atoms";

const Navigation = () => {
  return (
    <Flex justifyContent="center" alignItems="center" gap={10} gutterBottom>
      <Link href="/books">
        <Button color="black" variant="text" width={115}>
          Books
        </Button>
      </Link>
      <Link href="/authors">
        <Button color="black" variant="text" width={115}>
          Authors
        </Button>
      </Link>
      <Divider orientation="vertical" />
      <Link href="/books/create">
        <Button color="black" variant="text" width={115}>
          Create Book
        </Button>
      </Link>
      <Link href="/authors/create">
        <Button color="black" variant="text" width={150}>
          Create Author
        </Button>
      </Link>
    </Flex>
  );
};

export default Navigation;
