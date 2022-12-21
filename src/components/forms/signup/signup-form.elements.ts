import styled from "styled-components";
import { themes } from "../../../themes";
import { globalStyles } from "../../constants";

export const Container = styled.div`
  max-width: 75vw;
  width: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;
export const FormContainer = styled.form`
  /* max-width: 75vw;
  width: 410px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px; */
`;

export const HeaderText = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 38.73px;
  margin-bottom: 48px;

  @media ${themes.breakpoints.md} {
    & {
      font-size: 28px;
    }
  }

  @media ${themes.breakpoints.sm} {
    & {
      font-size: 20px;
      text-align: center;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button<{ inactive ?: boolean }>`
  width: 193px;
  height: 48px;
  border: ${({inactive}) => inactive ? "1px solid #ccc" : "none"};
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${({inactive}) => inactive ? "#ccc" : "#fff"};
  background-color: ${({ inactive }) =>
    inactive ? "transparent" : globalStyles.colors.gray1};
  font-size: 14px;
  font-weight: 600;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
