import React from "react";
import styled from "styled-components";
import { themes } from "../../themes";
import { globalStyles } from "../constants";

export const Footer = () => {
  return (
    <FooterContainer>
      <LinkItem>Community</LinkItem>
      <LinkItem>Help & Support</LinkItem>
      <LinkItem>Contact us</LinkItem>
      <LinkItem>Privacy Policy</LinkItem>
      <LinkItem>Terms of service</LinkItem>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 96px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${globalStyles.colors.blue100};

  @media ${themes.breakpoints.md} {
    height: 224px;
    padding: 0px 28px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }

  @media ${themes.breakpoints.sm} {
    height: 150px;
    padding: 0px 28px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;

const LinkItem = styled.p`
  color: ${globalStyles.colors.blue500};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media ${themes.breakpoints.sm} {
    font-size: 12px;
  }
`;
