import React, { useContext } from "react";
import AccountCreationContext from "../../../../context/account-creation-context";
import { accountOptions } from "../data";
import { Button, MainContainer, Title } from "./account-type-selection.element";

export const AccountTypeSelection = () => {
const {acountTypeIndex, setAccountTypeIndex} = useContext(AccountCreationContext)
  return (
    <MainContainer>
      <Title>Select your account type</Title>
      {accountOptions.map((option) => (
        <Button
          key={option.index}
          onClick={() => setAccountTypeIndex(option.index)}
          selected={option.index === acountTypeIndex}
        >
          {option.text}
        </Button>
      ))}
    </MainContainer>
  );
};

export default AccountTypeSelection;
