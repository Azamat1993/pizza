import React, { useState, useContext } from "react";
import {
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid,
  IconButton
} from "@material-ui/core";
import { useObserver } from "mobx-react";
import AddIcon from "@material-ui/icons/Add";

import { Overview } from "modules/cart/overview";
import { Address } from "modules/cart/address";
import { PaymentDetails } from "modules/cart/payment-details";
import { Summary } from "modules/cart/summary";
import { Empty } from "modules/cart/empty";
import { Success } from "modules/cart/success";
import { SCManagerContext } from "modules/context/sc-manager-context";
import { StoreContext } from "modules/context/sc-context";
import { useStyles } from "./style";
import { useStepper, useFormSetter } from "./form.service";

const steps = ["Overview", "Shipping", "Payment details", "Summary"];

const getStepContent = (step, formValue, setFormValue) => {
  switch (step) {
    case 0:
      return <Overview />;
    case 1:
      return <Address formValue={formValue} setFormValue={setFormValue} />;
    case 2:
      return (
        <PaymentDetails formValue={formValue} setFormValue={setFormValue} />
      );
    case 3:
      return <Summary formValue={formValue} />;
    case 4:
      return <Success />;
    default:
      throw new Error("Unknown step");
  }
};

export const Form = () => {
  const classes = useStyles();
  const [activeStep, handleNext, handleBack] = useStepper(0);
  const [formValue, onSetFormValue] = useFormSetter({ expDate: "2025-01-01" });
  const managerStore = useContext(SCManagerContext);
  const store = useContext(StoreContext);

  const getMainContent = () => {
    if (!store.list.items.length > 0) {
      return (
        <Empty
          content={`Looks like you have nothing in your cart. To proceed, please add items from catalogue`}
        >
          <IconButton
            onClick={managerStore.close}
            edge="end"
            aria-label="delete"
          >
            <AddIcon />
          </IconButton>
        </Empty>
      );
    }

    return getStepContent(activeStep, formValue, onSetFormValue);
  };

  return useObserver(() =>
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        {store.list.items.length > 0 &&
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label =>
              <Step key={label}>
                <StepLabel>
                  {label}
                </StepLabel>
              </Step>
            )}
          </Stepper>}
        <React.Fragment>
          {getMainContent()}
          <Grid
            className={classes.buttons}
            container
            wrap="nowrap"
            justify="space-between"
          >
            <Button onClick={managerStore.close}>Close</Button>

            {store.list.items.length > 0 &&
              activeStep < steps.length &&
              <Grid item container justify="flex-end">
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
              </Grid>}
          </Grid>
        </React.Fragment>
      </Paper>
    </main>
  );
};
