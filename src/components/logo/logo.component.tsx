import React from "react";
import styled from "styled-components";
import { globalStyles } from "../constants";

interface Props {
  text?: string;
}

export const LogoComponent: React.FC<Props> = ({ text }) => {
  return (
    <LogoContainer>
      <CustomImage src={"/assets/images/apc-logo.png"} />
      <LogoText>{text}</LogoText>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CustomImage = styled.img`
  width: 40px;
  height: 40px;
`;

const LogoText = styled.p`
  padding: 8px;
  font-size: 24px;
  cursor: pointer;
  font-weight: 700;
  line-height: 28.8px;
  color: ${globalStyles.colors.black800};
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;
