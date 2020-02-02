import React, { useContext } from "react";
import {
  Typography,
  ListItem,
  ListItemText,
  Grid,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch
} from "@material-ui/core";
import { useObserver } from "mobx-react";

import { StoreContext } from "modules/context/sc-context";
import { List } from "modules/cart/list";

export const Overview = () => {
  const store = useContext(StoreContext);

  const handleCurrencyChange = e => store.currency.setCurrent(e.target.value);

  return useObserver(() =>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order overview
      </Typography>
      <ListItem>
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
      <ListItem>
        <ListItemText primary="With delivery" />
        <Switch
          checked={store.withDelivery}
          onChange={store.toggleWithDelivery}
          color="primary"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </ListItem>
      <List />
      <ListItem>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1">
          {store.totalPriceWithCurrency}
        </Typography>
      </ListItem>
    </React.Fragment>
  );
};
