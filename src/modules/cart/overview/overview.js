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

export const Overview = () => {
  const store = useContext(StoreContext);

  const handleCurrencyChange = e => store.currency.setCurrent(e.target.value);

  const secondaryText = () => {
    if (store.withShipping) {
      return "*Price with shipping. To change shipping settings, click next";
    }
    return null;
  };

  return useObserver(() =>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order overview
      </Typography>
      <ListItem disableGutters>
        <ListItemText primary="Select Currency" />
        <RadioGroup
          aria-label="position"
          name="position"
          value={store.currency.current.name}
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
      </ListItem>
      <List />
      <ListItem disableGutters>
        <ListItemText primary="Total" secondary={secondaryText()} />
        <Typography variant="subtitle1">
          {store.totalPriceWithCurrency}
        </Typography>
      </ListItem>
    </React.Fragment>
  );
};
