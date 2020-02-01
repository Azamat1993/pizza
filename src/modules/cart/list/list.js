import React from "react";

import { useStore } from "modules/context/sc-context";
import { Item } from "./item";

export const List = items => {
  const scList = useStore();

  return (
    <div>
      {scList.forEach(scItem => {
        return <Item item={scItem} />;
      })}
    </div>
  );
};
