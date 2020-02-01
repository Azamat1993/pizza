import React from "react";

import { StoreProvider } from "modules/context/sc-context";
import SCStore from "modules/store/sc";
import SCRoot from "modules/cart";

const store = new SCStore();

function App() {
  return (
    <StoreProvider value={store}>
      <SCRoot />
    </StoreProvider>
  );
}

export default App;
