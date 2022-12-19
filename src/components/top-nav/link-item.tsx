import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { globalStyles } from "../constants";

interface Props {
  href: string;
  title: string;
}

export const LinkItem: React.FC<Props> = (props) => {
  const { href, title} = props;
  const router = useRouter();

  return (
    <LinkContainer onClick={() => router.push(href)}>
      <LinkText>{title}</LinkText>
    </LinkContainer>
  );
};

export default LinkItem;

const LinkContainer = styled.li`
  height: 100%;
  padding: 0px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    /* border-bottom: 2px solid ${globalStyles.colors.blue600}; */
  }
  &:hover > p {
    /* color: ${globalStyles.colors.blue600}; */
  }
  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const LinkText = styled.p`
  color: ${globalStyles.colors.blue600};
  transition: all 0.3s linear;
`;
