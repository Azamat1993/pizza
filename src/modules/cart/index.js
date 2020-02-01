import React from "react";
import { Grid } from "@material-ui/core";

import { useStore } from "modules/context/sc-context";
import { List } from "modules/cart/list";

const Root = () => {
  const scStore = useStore();

  return (
    <Grid container direction="column">
      <List items={scStore.list} />
    </Grid>
  );
};

export default Root;
