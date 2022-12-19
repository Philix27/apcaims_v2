// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { Layout } from "../layout";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { themes } from "../themes";

const GlobalStyle = createGlobalStyle`
body {
  height: 100%;
  background-color: #fff;
};
  *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    user-select: none;
  }
`;
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
