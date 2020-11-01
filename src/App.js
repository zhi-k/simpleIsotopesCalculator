import React from "react";
import TagManager from "react-gtm-module";

import Heading from "./components/Heading";
import Calculator from "./components/Calculator";
import { StoreProvider, initialState, rootReducer } from "./context/Store";

TagManager.initialize(tag);

function App() {
  window.dataLayer.push({
    event: "pageview",
    page: {
      url: location,
      title: title,
    },
  });

  return (
    <StoreProvider state={initialState} reducer={rootReducer}>
      <div className="container-fluid" id="background">
        <Heading />
        <Calculator />
      </div>
    </StoreProvider>
  );
}

export default App;
