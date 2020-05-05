import React from "react";
import Heading from "./components/Heading";
import Calculator from "./components/Calculator";
import { StoreProvider, initialState, rootReducer } from "./context/Store";

function App() {
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
