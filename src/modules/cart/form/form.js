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
import { SCManagerContext } from "modules/context/sc-manager-context";
import { StoreContext } from "modules/context/sc-context";
import { useStyles } from "./style";

const steps = ["Overview", "Shipping address", "Payment details", "Summary"];

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
    default:
      throw new Error("Unknown step");
  }
};

export const Form = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formValue, setFormValue] = useState({});
  const managerStore = useContext(SCManagerContext);
  const store = useContext(StoreContext);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onSetFormValue = e =>
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });

  const getMainContent = () => {
    if (!store.list.items.length > 0) {
      return (
        <Grid
          container
          justify="center"
          className={classes.empty}
          alignItems="center"
        >
          <Grid container justify="center">
            <IconButton
              onClick={managerStore.close}
              edge="end"
              aria-label="delete"
            >
              <AddIcon />
            </IconButton>
            <Typography className={classes.emptyText}>
              Looks like you have nothing in your cart. To proceed, please add
              items from catalogue
            </Typography>
          </Grid>
        </Grid>
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
