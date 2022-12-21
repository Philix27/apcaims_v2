import styled from "styled-components";
import { globalStyles } from "../../../constants";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Button = styled.button<{ selected?: boolean }>`
  width: 100%;
  height: 48px;
  margin-bottom: 30px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  color: ${({ selected }) =>
    selected ? "#fff" : "#000"};
  background-color: ${({ selected }) =>
    selected ? globalStyles.colors.gray1 : "transparent"};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.5s linear;

  &:hover {
    background-color: ${globalStyles.colors.gray1};
    color: #fff;
  }
`;
