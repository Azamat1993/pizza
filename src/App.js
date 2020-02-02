import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppBar } from "@material-ui/core";

import { Toolbar } from "modules/home/toolbar";
import SCStore from "modules/store/sc";
import { StoreProvider } from "modules/context/sc-context";
import Home from "modules/home";

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

function App() {
  return (
    <StoreProvider value={store}>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
      </Router>
    </StoreProvider>
  );
}

export default App;
