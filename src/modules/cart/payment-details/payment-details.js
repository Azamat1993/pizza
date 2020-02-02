import React from "react";
import { Typography, Grid, TextField } from "@material-ui/core";

import { fieldsInfo } from "./fields-info";

export const PaymentDetails = ({ formValue, setFormValue }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        {fieldsInfo.map(fieldInfo =>
          <Grid key={fieldInfo.name} item xs={12} sm={6}>
            <TextField
              name={fieldInfo.name}
              required
              label={fieldInfo.label}
              fullWidth
              type={fieldInfo.type || "text"}
              helperText={fieldInfo.helperText || ""}
              onChange={setFormValue}
              value={formValue[fieldInfo.name] || ""}
            />
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
};
