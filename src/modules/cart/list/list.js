import React, { memo } from "react";
import { useObserver } from "mobx-react";
import { List as MaterialList } from "@material-ui/core";

import { Item } from "modules/cart/item";

export const List = memo(({ list }) => {
  return useObserver(() =>
    <MaterialList>
      {list.items.map((item, index) => {
        return <Item key={index} item={item} removeItem={list.remove} />;
      })}
    </MaterialList>
  );
});
