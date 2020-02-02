import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppBar } from "@material-ui/core";

import SCManagerStore from "modules/store/sc-manager";
import SCStore from "modules/store/sc";
import { SCManagerProvider } from "modules/context/sc-manager-context";
import { StoreProvider } from "modules/context/sc-context";
import Home from "modules/home";
import Cart from "modules/cart";
import { Toolbar } from "modules/shared/toolbar";

const store = new SCStore([
  {
    price: 12,
    title: "Margarita"
  },
  {
    price: 3,
    title: "Vegetarian"
  }
]);
const scManagerStore = new SCManagerStore();

const App = () => {
  return (
    <StoreProvider value={store}>
      <SCManagerProvider value={scManagerStore}>
        <AppBar position="static">
          <Toolbar />
        </AppBar>
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
        </Router>
        <Cart />
      </SCManagerProvider>
    </StoreProvider>
  );
};

export default App;
