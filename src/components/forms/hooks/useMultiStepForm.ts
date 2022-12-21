import { ReactElement, useState } from "react";
import { SignupAccountType } from "../../../types";

export const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [accountType, setAccountType] = useState<SignupAccountType | undefined>(
    undefined
  );

  const next = () => {
    setCurrentStepIndex((currentIndex) => {
      if (currentIndex >= steps.length - 1) {
        return currentIndex;
      }
      return currentIndex + 1;
    });
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  const back = () => {
    setCurrentStepIndex((currentIndex) => {
      if (currentIndex <= 0) {
        return currentIndex;
      }

      return currentIndex - 1;
    });
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    goTo,
    accountType,
    setAccountType,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
  };
};
