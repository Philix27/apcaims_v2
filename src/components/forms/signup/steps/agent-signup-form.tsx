import React from "react";
import styled from "styled-components";
import { SelectDropdown } from "../../../inputs";

export const AgentSignupForm = () => {
  return (
    <Form>
      <SelectDropdown label="State" handleChange={() => {}} />
      <RowContainer>
        <SelectDropdown label="LGA" handleChange={() => {}} width="50%" placeholderText="Select LGA"/>
        <SelectDropdown label="Ward" handleChange={() => {}} width="20%" placeholderText="Ward"/>
        <SelectDropdown
          label="Polling Unit"
          handleChange={() => {}}
          width="20%"
          placeholderText="PU"
        />
      </RowContainer>
    </Form>
  );
};

export default AgentSignupForm;

const Form = styled.form`
  width: 100%;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;
