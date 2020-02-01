import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";

import { StoreContext } from "modules/context/sc-context";
import { List } from "modules/cart/list";
import { Form } from "modules/cart/form";

const Root = () => {
  const store = useContext(StoreContext);
  return (
    <Grid container direction="column">
      <Form store={store} />
    </Grid>
  );
};

export default Root;
