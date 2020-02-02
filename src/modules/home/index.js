import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";

import { List } from "modules/home/list";
import { useStyles } from "modules/home/style";

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

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Pizza shop</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.content}>
        <List items={items} />
      </Grid>
    </React.Fragment>
  );
};

export default Home;
