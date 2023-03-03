import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { Navigation, SearchBar } from "../molecules";
import { Container, Divider, Main } from "../ui/atoms";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();
  const path = router.asPath;
  console.log({ path });
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
          </>
        )}
        <section id="main-section">{children}</section>
      </Container>
    </Main>
  );
};

export default Layout;
