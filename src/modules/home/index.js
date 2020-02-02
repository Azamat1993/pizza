import React, { useContext } from "react";
import { Grid } from "@material-ui/core";

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
    <Grid container className={classes.content}>
      <List items={items} />
    </Grid>
  );
};

export default Home;
