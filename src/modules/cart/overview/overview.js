import React, { useContext } from "react";
import { Typography, ListItem, ListItemText } from "@material-ui/core";

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

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order overview
      </Typography>
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
