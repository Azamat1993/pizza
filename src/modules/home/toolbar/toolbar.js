import React, { useContext } from "react";
import {
  Toolbar as MuiToolbar,
  Typography,
  Badge,
  IconButton
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useObserver } from "mobx-react";

import { StoreContext } from "modules/context/sc-context";
import { useStyles } from "modules/home/toolbar/style";

export const Toolbar = () => {
  const classes = useStyles();
  const store = useContext(StoreContext);

  return useObserver(() =>
    <MuiToolbar>
      <Typography className={classes.title} variant="h6">
        Pizza shop
      </Typography>
      <IconButton
        aria-label={`show ${store.list.items.length} shopping cart items`}
        color="inherit"
      >
        <Badge badgeContent={store.list.items.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </MuiToolbar>
  );
};
