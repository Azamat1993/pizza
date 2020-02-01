import React from "react";
import { Typography } from "@material-ui/core";

import { List } from "modules/cart/list";

export const Overview = ({ list }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order overview
      </Typography>
      <List list={list} />
    </React.Fragment>
  );
};
