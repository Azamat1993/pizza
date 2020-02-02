import React from "react";
import { Grid, Typography } from "@material-ui/core";

import { useStyles } from "./style";

export const Empty = ({ children, content }) => {
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
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
};
