import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { LoginForm } from "../../components/forms";

export const HomeView: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="The homepage of APCAims" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        {/* <Text>Login</Text> */}
        <LoginForm />
      </MainContainer>
    </Page>
  );
};

const Page = styled.div``;

const MainContainer = styled.main`
  font-family: "Inter";
  font-weight: 400;
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p``;
