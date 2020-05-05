import React, { useReducer, useContext, createContext } from "react";
import { calculationReducer } from "./Reducers";

export const initialState = {
  results: [],
  settings: {},
};

function settingsReducer() {}

export const rootReducer = ({ results, settings }, action) => ({
  results: calculationReducer(results, action),
  settings: settingsReducer(settings, action),
});

export const StoreContext = createContext();

export const StoreProvider = ({ reducer, state, children }) => {
  return <StoreContext.Provider value={useReducer(reducer, state)}>{children}</StoreContext.Provider>;
};

export const useStateValues = () => useContext(StoreContext);
