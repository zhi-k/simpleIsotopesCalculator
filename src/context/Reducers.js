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
      return [...state.filter((results) => results.id !== action.payload.id)];
    default:
      return state;
  }
}
