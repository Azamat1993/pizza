import React, { memo } from "react";
import { ListItem, ListItemAvatar, Avatar } from "@material-ui/core";
import { ImageIcon } from "@material-ui/icons";

export const Item = memo(item => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.title} secondary={`total price: ${item.totalPrice}} />
    </ListItem>
  );
});
