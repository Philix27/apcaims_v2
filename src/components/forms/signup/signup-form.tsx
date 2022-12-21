import { useContext } from "react";
import AccountCreationContext from "../../../context/account-creation-context";
import { useMultiStepForm } from "../hooks";
import FormWrapper from "./form-wrapper";
import { Button, ButtonContainer } from "./signup-form.elements";
import {
  AccountTypeSelection,
  AgentSignupForm,
  StateAdminSignupForm,
  WardAdminSignupForm,
} from "./steps";

export const SignupForm = () => {
  const { acountTypeIndex } = useContext(AccountCreationContext);
  const formTitle = [
    "Create your account",
    "Agent account creation",
    "Ward admin creation",
    "State admin creation",
  ];
  const { step, currentStepIndex, next, back, goTo } = useMultiStepForm([
    <AccountTypeSelection />,
    <AgentSignupForm />,
    <WardAdminSignupForm />,
    <StateAdminSignupForm />,
  ]);
  return (
    <FormWrapper title={formTitle[currentStepIndex]}>
      {step}
      <ButtonContainer>
        <Button onClick={() => goTo(0)} inactive={currentStepIndex === 0}>
          Back
        </Button>
        <Button
          onClick={() => {
            if (acountTypeIndex) {
              goTo(acountTypeIndex);
            }
          }}
        >
          {currentStepIndex > 0 ? "Create account" : "Next"}
        </Button>
      </ButtonContainer>
    </FormWrapper>
  );
};

export default SignupForm;
