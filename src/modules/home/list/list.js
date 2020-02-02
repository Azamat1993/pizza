import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import { Item } from "modules/home/item";

export const List = ({ items }) => {
  return (
    <Grid container xs={12}>
      {items.map(item => {
        return (
          <Grid key={item.id} item>
            <Item item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

List.propTypes = {
  items: PropTypes.array
};
