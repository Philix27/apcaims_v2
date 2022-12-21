import React, { createContext, useEffect, useState } from "react";

interface AccountCreationInterface {
  acountTypeIndex: number | undefined;
  setAccountTypeIndex: (index: number) => void;
}

interface ProviderInterface {
  children: React.ReactNode;
}

const initialValue: AccountCreationInterface = {
  acountTypeIndex: undefined,
  setAccountTypeIndex: (index) => {},
};

const AccountCreationContext =
  createContext<AccountCreationInterface>(initialValue);

export const AccountCreationProvider: React.FC<ProviderInterface> = ({
  children,
}) => {
  const [chosenIndex, setChosenIndex] = useState<number | undefined>(undefined);

  const setAccountTypeIndex = (index: number) => {
    setChosenIndex(index);
  };

  const value: AccountCreationInterface = {
    acountTypeIndex: chosenIndex,
    setAccountTypeIndex,
  };

  return (
    <AccountCreationContext.Provider value={value}>
      {children};
    </AccountCreationContext.Provider>
  );
};

export default AccountCreationContext;
