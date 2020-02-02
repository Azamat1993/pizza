import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { useStyles } from "./style";

export const Empty = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      className={classes.empty}
      alignItems="center"
    >
      <Grid container justify="center">
        {children}
        <Typography className={classes.emptyText}>
          Looks like you have nothing in your cart. To proceed, please add items
          from catalogue
        </Typography>
      </Grid>
    </Grid>
  );
};
