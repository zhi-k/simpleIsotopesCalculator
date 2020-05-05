export function calculationReducer(state, action) {
  switch (action.type) {
    case "CREATE_ENTRY":
      return [
        ...state,
        {
          molecule: action.payload.molecule,
          originalActivity: action.payload.originalActivity,
          timeElapsed: action.payload.timeElapsed,
          calculatedActivity: action.payload.calculatedActivity,
        },
      ];
    case "DELETE_ENTRY":
      return [...state.filter((results) => results !== action.payload)];
    default:
      return state;
  }
}

export function settingsReducer(state, action) {
  switch (action.type) {
    case "SET_MOLECULE":
      return {
        ...state,
        molecule: action.payload.molecule,
        halfLife: action.payload.halfLife,
      };
    default:
      return state;
  }
}

export function optionsReducer(state, action) {
  switch (action.type) {
    case "ADD_OPTION":
      return [
        ...state,
        {
          optionName: action.payload.optionName,
          optionHalf: action.payload.optionHalf,
        },
      ];
    case "DELETE_OPTION":
      return [...state.filter((options) => options !== action.payload)];
    default:
      return state;
  }
}
