import React from "react";
import styled from "styled-components";
import { Footer } from "../components/footer";
import { TopNavigationBar } from "../components/top-nav";
import { useRouter } from "next/router";
interface Props {
  children: JSX.Element;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <LayoutContainer>
      <TopNavigationBar />
      {children}
      {router.pathname === "/" && <Footer />}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.nav`
  padding: 30px;
`;
