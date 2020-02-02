import React, { useContext } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid
} from "@material-ui/core";

import { StoreContext } from "modules/context/sc-context";
import { useStyles } from "./style";

export const Summary = ({ formValue }) => {
  const store = useContext(StoreContext);
  const classes = useStyles();

  const formValues = Object.values(formValue);

  console.log(formValues);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {store.list.items.map(item =>
          <ListItem className={classes.listItem} key={item.id}>
            <ListItemText primary={item.title} secondary={item.description} />
            <Typography variant="body2">
              {item.totalPriceWithCurrency}
            </Typography>
          </ListItem>
        )}
        {store.withShipping &&
          <ListItem className={classes.listItem}>
            <ListItemText primary="Shipping cost" />
            <Typography variant="body2">
              {store.shippingCostWithCurrency}
            </Typography>
          </ListItem>}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {store.totalPriceWithCurrency}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        {store.withShipping &&
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Shipping details
            </Typography>
          </Grid>}
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <List />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
