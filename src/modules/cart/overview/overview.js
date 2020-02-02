import React, { useContext } from "react";
import {
  Typography,
  ListItem,
  ListItemText,
  Grid,
  FormControlLabel,
  Radio,
  RadioGroup
} from "@material-ui/core";
import { useObserver } from "mobx-react";

import { StoreContext } from "modules/context/sc-context";
import { List } from "modules/cart/list";

const currencyToSymbol = {
  USD: "$",
  EUR: "€"
};

export const Overview = () => {
  const store = useContext(StoreContext);

  const getTotalPrice = () => {
    return `${currencyToSymbol[store.currency]}${store.totalPrice}`;
  };

  const handleCurrencyChange = e => {
    store.setCurrency(e.target.value);
  };

  return useObserver(() =>
    <React.Fragment>
      <Grid container wrap="nowrap" alignItems="center" justify="space-between">
        <Typography variant="h6" gutterBottom>
          Order overview
        </Typography>
        <RadioGroup
          aria-label="position"
          name="position"
          value={store.currency}
          onChange={handleCurrencyChange}
          row
        >
          <FormControlLabel
            value="USD"
            control={<Radio color="primary" />}
            label="USD"
            labelPlacement="end"
          />
          <FormControlLabel
            value="EUR"
            control={<Radio color="primary" />}
            label="EUR"
            labelPlacement="end"
          />
        </RadioGroup>
      </Grid>
      <List />
      <ListItem>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1">
          {getTotalPrice()}
        </Typography>
      </ListItem>
    </React.Fragment>
  );
};
