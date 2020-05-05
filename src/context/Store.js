import React, { useReducer, useContext, createContext } from "react";
import { calculationReducer, settingsReducer } from "./Reducers";

export const initialState = {
  results: [],
  settings: {
    molecule: "Fluorine-18",
    halfLife: 109.77, 
  },
};

export const rootReducer = ({ results, settings }, action) => ({
  results: calculationReducer(results, action),
  settings: settingsReducer(settings, action),
});

export const StoreContext = createContext();

export const StoreProvider = ({ reducer, state, children }) => {
  return <StoreContext.Provider value={useReducer(reducer, state)}>{children}</StoreContext.Provider>;
};

export const useStateValues = () => useContext(StoreContext);
