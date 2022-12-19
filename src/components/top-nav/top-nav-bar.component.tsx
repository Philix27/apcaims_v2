import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "../buttons";
import { globalStyles } from "../constants";
import { LogoComponent } from "../logo";
import { useRouter } from "next/router";
import { themes } from "../../themes";
import DropdownLinks from "./dropdown-menu";
import MenuContext from "../../context/drop-menu-context";
import { Modal } from "../modal";

export const TopNavigationBar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { open, closeMenu, toggleMenu } = useContext(MenuContext);

  const router = useRouter();

  return (
    <MainContainer>
      {open && <Modal onClick={closeMenu} />}
      <NavContainer>
        {/* Logo here */}
        <LogoComponent text="APCAIMS" />

        {/* Auth Buttons */}
        <AuthButtonContainer>
          {router.pathname === "/" ? (
            <>
              <Button
                title="Log in"
                height="48px"
                width="85px"
                plain
                titleColor={globalStyles.colors.blue600}
                onClickHandler={() => router.push("/login")}
              />
              <Button
                title="Create account"
                height="48px"
                width="194px"
                titleColor="#fff"
                bgColor={globalStyles.colors.blue600}
              />
            </>
          ) : (
            <Button title="create account" plain />
          )}
        </AuthButtonContainer>
        <MenuButtonContainer>
          <Button
            title="Menu"
            titleColor={globalStyles.colors.blue600}
            plain
            onClickHandler={toggleMenu}
          />
        </MenuButtonContainer>
        <DropdownLinks menuOpen={open} />
      </NavContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div``;

const NavContainer = styled.nav`
  height: 3rem;
  width: 100%;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AuthButtonContainer = styled.div`
  transition: display 0.5s linear;
  @media ${themes.breakpoints.md} {
    display: none;
  }
`;

const MenuButtonContainer = styled.div`
  display: none;

  @media ${themes.breakpoints.md} {
    display: block;
  }
`;
