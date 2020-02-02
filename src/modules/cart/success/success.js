import React, { useContext, useEffect } from "react";
import { IconButton } from "@material-ui/core";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

import { StoreContext } from "modules/context/sc-context";
import { Empty } from "modules/cart/empty";

export const Success = () => {
  const store = useContext(StoreContext);

  useEffect(store.reset, []);

  return (
    <Empty content="Thank you for the order! Information about your order will be delivered to you soon.">
      <IconButton edge="end" aria-label="delete">
        <DoneOutlineIcon />
      </IconButton>
    </Empty>
  );
};
