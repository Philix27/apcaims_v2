import React from "react";
import styled from "styled-components";
import { Button } from "../buttons";
import { globalStyles } from "../constants";
import { LogoComponent } from "../logo";

export const TopNavigationBar = () => {
  return (
    <NavContainer>
      {/* Logo here */}
      <LogoComponent text="APCAIMS" />

      {/* Auth Buttons */}
      <AuthButtonContainer>
        <Button title="create account" plain />
      </AuthButtonContainer>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 3rem;
  width: 100%;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthButtonContainer = styled.div``;
