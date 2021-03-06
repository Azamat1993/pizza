import React, { useContext, memo } from "react";
import {
  Toolbar as MuiToolbar,
  Typography,
  Badge,
  IconButton,
  AppBar
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useObserver } from "mobx-react";

import { StoreContext } from "modules/context/sc-context";
import { SCManagerContext } from "modules/context/sc-manager-context";
import { useStyles } from "./style";

export const Toolbar = memo(() => {
  const classes = useStyles();
  const store = useContext(StoreContext);
  const managerStore = useContext(SCManagerContext);

  return useObserver(() =>
    <AppBar position="static">
      <MuiToolbar>
        <Typography className={classes.title} variant="h6">
          Pizza shop
        </Typography>
        <IconButton
          onClick={managerStore.open}
          aria-label={`show ${store.list.items.length} shopping cart items`}
          color="inherit"
        >
          <Badge badgeContent={store.list.items.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </MuiToolbar>
    </AppBar>
  );
});
