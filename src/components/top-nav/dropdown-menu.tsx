import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuContext from "../../context/drop-menu-context";
import { globalStyles } from "../constants";
import { themes } from "../../themes";

interface Props {
  menuOpen: boolean;
}

export const DropdownLinks: React.FC<Props> = (props) => {
  const { menuOpen } = props;
  const { closeMenu } = useContext(MenuContext);
  const router = useRouter();
  return (
    <Container menuOpen={menuOpen}>
      <CloseMenuButton onClick={closeMenu}>X</CloseMenuButton>
      <LinkList>
        <LinkItem
          onClick={() => {
            router.push("/create");
            closeMenu();
          }}
        >
          <Text>Create account</Text>
        </LinkItem>
        <LinkItem
          onClick={() => {
            router.push("/login");
            closeMenu();
          }}
        >
          <Text>Log in</Text>
        </LinkItem>
      </LinkList>
    </Container>
  );
};

export default DropdownLinks;

const Container = styled.div<{ menuOpen: boolean }>`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 264px;
  z-index: 9;
  display: none;
  transform: translateY(0%);
  background-color: ${globalStyles.colors.blue600};
  transition: transform 0.5s linear;

  @media ${themes.breakpoints.md} {
    display: block;
    transform: translateY(${({ menuOpen }) => (menuOpen ? "0vh" : "-100%")});
  }

  @media ${themes.breakpoints.sm} {
    height: 180px;
  }
`;

const LinkList = styled.div`
  /* height: 100%; */
  display: flex;
  margin-top: 65.64px;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media ${themes.breakpoints.sm} {
    gap: 20px;
  }
`;

const LinkItem = styled.div`
  padding: 20px 0px;
  width: 335px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #fff;

    & p {
      color: ${globalStyles.colors.blue600};
    }
  }
  & a {
    text-decoration: none;
  }

  @media ${themes.breakpoints.sm} {
    width: 280px;
  }
`;
const Text = styled.p`
  color: #fff;
  letter-spacing: 0.25%;
  transition: all 0.3s linear;
`;

const CloseMenuButton = styled.button`
  position: fixed;
  right: 5.64px;
  top: 5.64px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${globalStyles.colors.blue100};
  font-weight: 600;
  padding: 5px;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
`;
