import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { SignupForm } from "../../components/forms";

export const SignupView: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>signup</title>
        <meta name="description" content="The signup page for APCAims accounts" />
        <link rel="icon" href="/assets/images/apc-logo.png" />
      </Head>
      <MainContainer>
        {/* signup form here */}
        <SignupForm />
      </MainContainer>
    </Page>
  );
};

const Page = styled.div``;

const MainContainer = styled.main`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p``;
