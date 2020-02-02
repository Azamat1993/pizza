import React from "react";
import { Typography, Grid, TextField } from "@material-ui/core";

export const PaymentDetails = ({ formValue, setFormValue }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="cardName"
            required
            id="cardName"
            label="Name on card"
            fullWidth
            onChange={setFormValue}
            value={formValue.cardName || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            name="cardNumber"
            onChange={setFormValue}
            value={formValue.cardNumber || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            type="date"
            name="expDate"
            onChange={setFormValue}
            value={formValue.expDate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            name="cvv"
            onChange={setFormValue}
            value={formValue.cvv || ""}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
