import { useState } from "react";

export const useStepper = initialState => {
  const [activeStep, setActiveStep] = useState(initialState);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return [activeStep, handleNext, handleBack];
};

export const useFormSetter = initialState => {
  const [formValue, setFormValue] = useState({
    expDate: "2025-01-01"
  });

  const onSetFormValue = e =>
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });

  return [formValue, onSetFormValue];
};
