import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { SCManagerProvider } from "modules/context/sc-manager-context";
import { StoreProvider } from "modules/context/sc-context";
import Home from "modules/home";
import Cart from "modules/cart";
import { Toolbar } from "modules/shared/toolbar";
import { store, scManagerStore } from "modules/store";

const App = () => {
  return (
    <StoreProvider value={store}>
      <SCManagerProvider value={scManagerStore}>
        <Toolbar />
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
