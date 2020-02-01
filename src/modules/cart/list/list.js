import React, { memo } from "react";
import { List } from "@material-ui/core";

import { Item } from "modules/cart/item";

export const List = memo(items => {
  return (
    <div>
      {items.forEach((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </div>
  );
});
