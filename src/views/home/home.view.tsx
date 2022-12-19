import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { Button } from "../../components/buttons";
import { globalStyles } from "../../components/constants";
import { CustomInput } from "../../components/inputs";
import { themes } from "../../themes";

export const HomeView: NextPage = () => {
  return (
    <Page>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="The homepage of APCAims" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <HeaderText>Verify agent status</HeaderText>
        <FormContainer>
          <CustomInput
            placeholderText="Enter your agent ID or NIN"
            value=""
            handleChange={() => {}}
            height={"80px"}
            padding={16}
            width={"100%"}
          />
          <Button
            title="Verify number"
            bgColor={globalStyles.colors.blue600}
            titleColor="#fff"
            height="48px"
            width="100%"
          />
        </FormContainer>
      </MainContainer>
    </Page>
  );
};

const Page = styled.div``;

const MainContainer = styled.main`
  font-weight: 400;
  /* height: 92vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 410px;
  max-width: 75vw;
`;

const HeaderText = styled.h3`
  font-size: 28px;
  font-weight: 500;
  line-height: 38.73px;
  margin-top: 157.88px;
  color: ${globalStyles.colors.gray600};

  @media ${themes.breakpoints.sm} {
    & {
      font-size: 26px;
      text-align: center;
    }
  }
`;
