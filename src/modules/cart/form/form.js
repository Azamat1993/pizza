import React, { useState } from "react";

import { useStyles } from "./style";
import {
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button
} from "@material-ui/core";
import { Overview } from "modules/cart/overview";
import { Address } from "modules/cart/address";
import { PaymentDetails } from "modules/cart/payment-details";

const steps = ["Review your order", "Shipping address", "Payment details"];

const getStepContent = step => {
  switch (step) {
    case 0:
      return <Overview />;
    case 1:
      return <Address />;
    case 2:
      return <PaymentDetails />;
    default:
      throw new Error("Unknown step");
  }
};

export const Form = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label =>
            <Step key={label}>
              <StepLabel>
                {label}
              </StepLabel>
            </Step>
          )}
        </Stepper>
        <React.Fragment>
          {getStepContent(activeStep)}
          <div className={classes.buttons}>
            {activeStep !== 0 &&
              <Button onClick={handleBack} className={classes.button}>
                Back
              </Button>}
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              {activeStep === steps.length - 1 ? "Place order" : "Next"}
            </Button>
          </div>
        </React.Fragment>
      </Paper>
    </main>
  );
};
