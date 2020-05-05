import React, { useReducer, useContext, createContext } from "react";
import { calculationReducer, optionsReducer } from "./Reducers";

export const initialState = {
  results: [],
  options: [
    {
      optionName: "Fluorine-18",
      optionHalf: 109.77,
    },
    {
      optionName: "Gallium-68",
      optionHalf: 68,
    },
    {
      optionName: "Lutetium-177",
      optionHalf: 9571.68, // equivalent to 6.647 days
    },
  ],
};

export const rootReducer = ({ results, options }, action) => ({
  results: calculationReducer(results, action),
  options: optionsReducer(options, action),
});

export const StoreContext = createContext();

export const StoreProvider = ({ reducer, state, children }) => {
  return <StoreContext.Provider value={useReducer(reducer, state)}>{children}</StoreContext.Provider>;
};

export const useStateValues = () => useContext(StoreContext);
