import React, { useContext } from "react";
import { Grid } from "@material-ui/core";

import { List } from "modules/home/list";
import { useStyles } from "modules/home/style";
import { products } from "data/products";

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.content}>
      <List items={products} />
    </Grid>
  );
};

export default Home;
