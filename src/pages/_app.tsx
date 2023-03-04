import { Layout } from "@/components/organism";
import { useApollo } from "@/lib/apolloClient";
import { theme } from "@/lib/styledTheme";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

// CSS
import "@/assets/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import GlobalContextProvider from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <NextNProgress color="#fc5b62" />
      <ThemeProvider theme={theme}>
        <GlobalContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalContextProvider>
      </ThemeProvider>
      <ToastContainer />
    </ApolloProvider>
  );
}
