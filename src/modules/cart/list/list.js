import React, { memo, useContext } from "react";
import { useObserver } from "mobx-react";
import { List as MaterialList } from "@material-ui/core";

import { StoreContext } from "modules/context/sc-context";
import { Item } from "modules/cart/item";

export const List = memo(({ list }) => {
  const store = useContext(StoreContext);

  return useObserver(() =>
    <MaterialList>
      {store.list.items.map((item, index) => {
        return <Item key={index} item={item} removeItem={store.list.remove} />;
      })}
    </MaterialList>
  );
});
