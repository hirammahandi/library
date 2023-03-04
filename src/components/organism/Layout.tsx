import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { Navigation, SearchBar } from "../molecules";
import { Container, Divider, Main, SelectOrderBy, SelectCount, Flex } from "../ui/atoms";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <Main>
      <header className="header">
        <Navigation />
      </header>
      <Container>
        {["/books", "/authors"].includes(path) && (
          <>
            <SearchBar />
            <Divider orientation="horizontal" />
            <SelectOrderBy />
          </>
        )}
        <section id="main-section">{children}</section>
      </Container>
    </Main>
  );
};

export default Layout;
