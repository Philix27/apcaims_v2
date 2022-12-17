import React from "react";
import styled from "styled-components";
import { globalStyles } from "../constants";

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Footer Here..</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 8vh;
  width: 100vw;
  background-color: ${globalStyles.colors.blue200}
`;
