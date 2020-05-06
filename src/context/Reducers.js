export function calculationReducer(state, action) {
  switch (action.type) {
    case "CREATE_ENTRY":
      return [
        ...state,
        {
          isotope: action.payload.isotope,
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

export function optionsReducer(state, action) {
  switch (action.type) {
    case "ADD_OPTION":
      // find last id on the array
      let lastId = state[state.length - 1].id;
      return [
        ...state,
        {
          id: lastId++,
          optionName: action.payload.optionName,
          optionHalf: action.payload.optionHalf,
          optionSelected: false,
        },
      ];
    case "DELETE_OPTION":
      return [...state.filter((options) => options !== action.payload)];
    case "SELECT_OPTION":
      return [
        ...state.map((option) =>
          option.id === action.payload ? { ...option, optionSelected: true } : { ...option, optionSelected: false }
        ),
      ];
    default:
      return state;
  }
}