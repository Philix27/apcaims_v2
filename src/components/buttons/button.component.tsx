import React from "react";
import styled from "styled-components";

interface CustomButtonProps {
  plain?: boolean;
  bgColor?: string;
  color?: string;
  width?: string;
  height?: string;
}
interface Props {
  title: string;
  plain?: boolean;
  bgColor?: string;
  width?: string;
  height?: string;
  type?: "button" | "submit" | "reset";
  titleColor?: string;
  onClickHandler?: () => void;
}

export const Button: React.FC<Props> = (props) => {
  const {
    onClickHandler,
    title,
    plain,
    bgColor,
    titleColor,
    width,
    height,
    type,
  } = props;
  return (
    <StyledButton
      plain={plain}
      bgColor={bgColor}
      color={titleColor}
      width={width}
      height={height}
      onClick={onClickHandler}
      type={type || "button"}
    >
      {title}
    </StyledButton>
  );
};

const StyledButton = styled.button<CustomButtonProps>`
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  height: ${({ height }) => height};
  width: ${({ width }) => (width ? width : "")};
  font-family: "Inter";
  color: ${({ color }) => (color ? color : "#000")};
  background-color: ${({ plain, bgColor }) =>
    plain ? "transparent" : bgColor};
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;
