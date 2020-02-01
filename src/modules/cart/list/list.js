import React from "react";

import { useStore } from "modules/context/sc-context";
import { Item } from "modules/cart/item";

export const List = items => {
  const store = useStore();

  return (
    <div>
      {store.list.forEach((item, index) => {
        return <Item key={index} item={item} />;
      })}
    </div>
  );
};
