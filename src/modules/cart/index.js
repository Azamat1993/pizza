import React from "react";

import { useStore } from "modules/context/sc-context";
import { List } from "modules/cart/list";

const Root = () => {
  const scStore = useStore();

  return <List items={scStore.list} />;
};

export default Root;
