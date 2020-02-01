import React, { memo } from "react";
import { ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { ImageIcon, DeleteIcon } from "@material-ui/icons";

export const Item = item => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.title} secondary={`total price: ${item.totalPrice}} />

      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
