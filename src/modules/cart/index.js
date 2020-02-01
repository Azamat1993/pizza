import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";

import { StoreContext } from "modules/context/sc-context";
import { List } from "modules/cart/list";

const Root = () => {
  const scStore = useContext(StoreContext);

  return (
    <Grid container direction="column">
      <Typography variant="h2">Shopping cart summary</Typography>
      <List list={scStore.list} />
    </Grid>
  );
};

export default Root;
