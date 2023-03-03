import { Layout } from "@/components/organism";
import { useApollo } from "@/lib/apolloClient";
import { theme } from "@/lib/styledTheme";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";

// CSS
import "@/assets/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <NextNProgress color="#fc5b62" />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}
