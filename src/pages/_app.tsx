// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Normalize } from "styled-normalize";
import { Layout } from "../layout";
import { Helmet } from "react-helmet";
import { MenuContextProvider } from "../context/drop-menu-context";
import { GlobalStyle } from "../styles/globalStyles";
import { AccountCreationProvider } from "../context/account-creation-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Normalize />
      <MenuContextProvider>
        <AccountCreationProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AccountCreationProvider>
      </MenuContextProvider>
    </>
  );
}
