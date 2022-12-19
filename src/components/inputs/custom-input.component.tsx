import React, { useState } from "react";
import styled from "styled-components";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { globalStyles } from "../constants";
import { themes } from "../../themes";

interface Props {
  label: string;
  secured?: boolean;
  value: string;
  multiline?: boolean;
  error?: string;
  placeholderText?: string;
  type?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: React.FC<Props> = (props) => {
  const {
    secured,
    label,
    handleChange,
    value,
    multiline,
    error,
    placeholderText,
    type,
  } = props;
  const [revealPassword, setRevealPassword] = useState<boolean>(false);

  const toggleReveal = () => {
    setRevealPassword((currentState) => !currentState);
  };

  return (
    <Container>
      <LabelText>{label}</LabelText>
      <InputContainer>
        <Input
          placeholder={placeholderText}
          type={
            secured
              ? revealPassword
                ? "text"
                : "password"
              : type
              ? type
              : "text"
          }
          value={value}
          onChange={handleChange}
        />
        {secured &&
          (revealPassword ? (
            <BsFillEyeSlashFill
              style={{ cursor: "pointer" }}
              onClick={toggleReveal}
              width={18.03}
              height={15}
            />
          ) : (
            <IoEyeSharp
              style={{ cursor: "pointer" }}
              onClick={toggleReveal}
              width={18.03}
              height={15}
            />
          ))}
      </InputContainer>
      <ErrorText>{error ? error : ""}</ErrorText>
    </Container>
  );
};

export default CustomInput;

const Container = styled.div`
  width: 90%;
  margin-top: 30px;
`;

const InputContainer = styled.div`
  width: 100%;
  min-height: 48px;
  border-radius: 8px;
  margin: 3px 0px;
  padding: 0px 10px 0px 5px;
  display: flex;
  border: 1px solid #ccc;
  align-items: center;
  justify-content: space-between;

  &:has(input:focus) {
    border: 2px solid #2684ff;
  }

  & svg {
    transition: opacity 0.5s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const LabelText = styled.p`
  font-size: 14px;
  line-height: 16.94px;
  font-weight: 500;
`;

const ErrorText = styled.p`
  font-size: 13px;
  color: ${globalStyles.colors.fail};
`;

const Input = styled.input`
  height: 100%;
  width: 90%;
  padding: 5px;
  font-size: 14px;
  outline: none;
  border: none;
  background-color: transparent;

  /* fix the chrome blue autocomplete bg color */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
  }
`;
