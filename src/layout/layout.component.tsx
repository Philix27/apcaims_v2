import React from "react";
import styled from "styled-components";
import { Footer } from "../components/footer";
import { TopNavigationBar } from "../components/top-nav";

interface Props {
  children: JSX.Element;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>
      <TopNavigationBar />
      {children}
      {/* <Footer /> */}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.nav``;
