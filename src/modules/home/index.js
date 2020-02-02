import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
  Badge
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { List } from "modules/home/list";
import { useStyles } from "modules/home/style";
import { StoreContext } from "modules/context/sc-context";

const items = [
  {
    id: 1,
    title: "Margarita",
    description: "This is margarita"
  },
  {
    id: 2,
    title: "Second",
    description: "This is second"
  },
  {
    id: 3,
    title: "Second",
    description: "This is second"
  },
  {
    id: 4,
    title: "Margarita",
    description: "This is margarita"
  }
];

const Home = () => {
  const classes = useStyles();
  const store = useContext(StoreContext);

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Pizza shop
          </Typography>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={store.list.items.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.content}>
        <List items={items} />
      </Grid>
    </React.Fragment>
  );
};

export default Home;
