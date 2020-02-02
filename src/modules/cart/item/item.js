import React, { memo } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  Grid,
  TextField
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import DeleteIcon from "@material-ui/icons/Delete";
import { useObserver } from "mobx-react";

import { useStyles } from "./style";

export const Item = memo(({ item, removeItem }) => {
  const classes = useStyles();

  const onChangeQuantity = e => item.setQuantity(e.target.value);

  return useObserver(() =>
    <ListItem disableGutters>
      <ListItemAvatar>
        <Avatar>
          <img className={classes.img} src={item.imageUrl} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={item.title}
        secondary={`total price: ${item.totalPriceWithCurrency}`}
      />

      <ListItemSecondaryAction>
        <Grid container justify="space-between">
          <TextField
            label="Amount"
            type="number"
            margin="dense"
            value={item.quantity}
            onChange={onChangeQuantity}
            inputProps={{ min: "1", max: "100", step: "1" }}
            InputLabelProps={{
              shrink: true
            }}
            variant="outlined"
          />
          <IconButton onClick={removeItem} edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Grid>
      </ListItemSecondaryAction>
    </ListItem>
  );
});
