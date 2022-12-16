import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Text } from "../../components/utils";

export const HomeView: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>HomePage</title>
        <meta name="description" content="The homepage of APCAims" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Text large bold color="black">
          Home Page
        </Text>
      </MainContainer>
    </Page>
  );
};

const Page = styled.div``;

const MainContainer = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
