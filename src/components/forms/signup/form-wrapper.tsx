import React from "react";
import styled from "styled-components";
import { themes } from "../../../themes";

interface Props {
  title?: string;
  children: React.ReactNode;
}
const FormWrapper: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <HeaderText>{title}</HeaderText>
      {children}
    </Container>
  );
};

export default FormWrapper;

const Container = styled.div`
  max-width: 75vw;
  width: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const HeaderText = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 38.73px;
  margin-bottom: 48px;

  @media ${themes.breakpoints.md} {
    & {
      font-size: 28px;
    }
  }

  @media ${themes.breakpoints.sm} {
    & {
      font-size: 20px;
      text-align: center;
    }
  }
`;
