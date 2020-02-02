import React, { memo } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  ListItemText,
  IconButton
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import DeleteIcon from "@material-ui/icons/Delete";
import { useObserver } from "mobx-react";

export const Item = memo(({ item, removeItem }) => {
  return useObserver(() =>
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={item.title}
        secondary={`total price: ${item.totalPriceWithCurrency}`}
      />

      <ListItemSecondaryAction>
        <IconButton onClick={removeItem} edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
});
