import React from "react";
import PropTypes from "prop-types";
import { Grid, Paper } from "@material-ui/core";

import { Item } from "modules/home/item";

export const List = ({ items }) => {
  return (
    <Grid container spacing={3}>
      {items.map(item => {
        return (
          <Grid xs={3} key={item.id} item>
            <Paper>
              <Item item={item} />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

List.propTypes = {
  items: PropTypes.array
};
