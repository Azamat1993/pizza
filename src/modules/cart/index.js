import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";

import { StoreContext } from "modules/context/sc-context";
import { List } from "modules/cart/list";
import { Form } from "modules/cart/form";

const Root = () => {
  const scStore = useContext(StoreContext);

  return (
    <Grid container direction="column">
      <Typography variant="h2">Shopping cart summary</Typography>
      <List list={scStore.list} />

      <Form />
    </Grid>
  );
};

export default Root;
