import React, { memo } from "react";
import { List as MaterialList } from "@material-ui/core";

import { Item } from "modules/cart/item";

export const List = memo(({ items }) => {
  console.log(items);
  return (
    <MaterialList>
      {items.map((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </MaterialList>
  );
});
