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
import { fieldsInfo } from "./fields-info";
import { useStyles } from "./style";

export const Address = ({ formValue, setFormValue }) => {
  const store = useContext(StoreContext);
  const classes = useStyles();

  return useObserver(() =>
    <React.Fragment>
      <ListItem disableGutters divider>
        <ListItemText
          primary="With shipping"
          secondary={`*Shipping will cost additional: ${store.shippingCostWithCurrency}`}
        />
        <Switch
          checked={store.withShipping}
          onChange={store.toggleWithShipping}
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </ListItem>

      {store.withShipping &&
        <React.Fragment>
          <Typography className={classes.title} variant="h6" gutterBottom>
            Shipping address
          </Typography>

          <Grid container spacing={3}>
            {fieldsInfo.map(fieldInfo =>
              <Grid key={fieldInfo.name} item xs={12} sm={6}>
                <TextField
                  required
                  name={fieldInfo.name}
                  label={fieldInfo.label}
                  fullWidth
                  onChange={setFormValue}
                  value={formValue[fieldInfo.name] || ""}
                />
              </Grid>
            )}
          </Grid>
        </React.Fragment>}
    </React.Fragment>
  );
};
