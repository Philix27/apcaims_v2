import React from "react";
import styled from "styled-components";
import Select, { StylesConfig } from "react-select";
import { globalStyles } from "../constants";

export interface OptionsInterface {
  value: string;
  label: string;
  customAbbreviation?: string;
}

interface Props {
  options?: OptionsInterface[];
  label?: string;
  error?: string;
  placeholderText?: string;
  handleChange: (e: any) => void;
}

const customStyle: StylesConfig = {
  control: (styles) => ({ ...styles, outline: "none" }),
  placeholder: (styles) => ({
    ...styles,
    fontFamily: "Inter",
    fontSize: "14px",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: globalStyles.colors.black800,
    cursor: "pointer",
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  container: (styles) => ({ ...styles, margin: "3px 0px" }),
  option: (styles) => ({
    ...styles,
    fontSize: "14px",
  }),
  valueContainer: (styles) => ({
    ...styles,
    fontSize: "14px",
    fontFamily: "Inter",
  }),
};

export const SelectDropdown: React.FC<Props> = (props) => {
  const { label, options, placeholderText, error, handleChange } = props;
  return (
    <Container>
      {label && <LabelText>{label}</LabelText>}
      <Select
        options={options}
        placeholder={placeholderText}
        styles={customStyle}
        onChange={(e: any) => handleChange(e.value)}
      />
      <ErrorText>{error ? error : ""}</ErrorText>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
`;

const LabelText = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-family: "Inter";
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: ${globalStyles.colors.fail};
`;
