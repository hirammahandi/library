import Link from "next/link";
import { FC, ReactNode } from "react";
import { Button } from "../atoms/Button";
import TextInput from "../atoms/TextInput";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        gap: 50,
      }}
    >
      <section id="search-section">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TextInput width={300} placeholder="Search.." />
        </div>
      </section>
      <section id="navigation-section" style={{ minWidth: 200, width: 400, alignSelf: "center" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            gap: 10,
          }}
        >
          <Link href="/books/create">
            <Button color="primary" variant="contained" width={115}>
              Create Book
            </Button>
          </Link>
          <button>
            <Link href="/books">Books</Link>
          </button>
          <button>
            <Link href="/authors">Authors</Link>
          </button>
        </nav>
        <hr />
      </section>
      <section id="main-section">{children}</section>
    </main>
  );
};

export default Layout;
