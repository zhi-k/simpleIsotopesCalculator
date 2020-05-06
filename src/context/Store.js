import React, { useReducer, useContext, createContext } from "react";
import { calculationReducer, optionsReducer } from "./Reducers";

export const initialState = {
  results: [],
  options: [
    {
      id: 1,
      optionName: "Fluorine-18",
      optionHalf: 109.77,
      optionSelected: true,
    },
    {
      id: 2,
      optionName: "Gallium-68",
      optionHalf: 68,
      optionSelected: false,
    },
    {
      id: 3,
      optionName: "Lutetium-177",
      optionHalf: 9571.68, // equivalent to 6.647 days
      optionSelected: false,
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
