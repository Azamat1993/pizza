import React from "react";

import { List } from "modules/home/list";

const items = [
  {
    id: 1,
    title: "Margarita",
    description: "This is margarita"
  },
  {
    id: 2,
    title: "Second",
    description: "This is second"
  },
  {
    id: 2,
    title: "Second",
    description: "This is second"
  },
  {
    id: 1,
    title: "Margarita",
    description: "This is margarita"
  }
];

const Home = () => {
  return <List items={items} />;
};

export default Home;
