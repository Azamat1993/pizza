import React, { useContext } from "react";
import {
  Typography,
  Grid,
  TextField,
  ListItem,
  ListItemText,
  Switch
} from "@material-ui/core";
import { useObserver } from "mobx-react";

import { StoreContext } from "modules/context/sc-context";
import { useStyles } from "./style";

export const Address = ({ formValue, setFormValue }) => {
  const store = useContext(StoreContext);
  const classes = useStyles();

  return useObserver(() =>
    <React.Fragment>
      <ListItem disableGutters divider>
        <ListItemText primary="With delivery" />
        <Switch
          checked={store.withDelivery}
          onChange={store.toggleWithDelivery}
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </ListItem>

      <Typography className={classes.title} variant="h6" gutterBottom>
        Shipping address
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            onChange={setFormValue}
            value={formValue.firstName || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            onChange={setFormValue}
            value={formValue.lastName || ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
            onChange={setFormValue}
            value={formValue.address1 || ""}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
            onChange={setFormValue}
            value={formValue.address2 || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            onChange={setFormValue}
            value={formValue.city || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            onChange={setFormValue}
            value={formValue.state || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            onChange={setFormValue}
            value={formValue.zip || ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
            onChange={setFormValue}
            value={formValue.country || ""}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
