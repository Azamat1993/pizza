import React from "react";
import { IconButton } from "@material-ui/core";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

import { Empty } from "modules/cart/empty";

export const Success = () => {
  return (
    <Empty content="Thank you for the order! Information about your order will be delivered to you soon.">
      <IconButton edge="end" aria-label="delete">
        <DoneOutlineIcon />
      </IconButton>
    </Empty>
  );
};
