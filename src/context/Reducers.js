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
      const { optionName, optionHalf } = action.payload;

      let newObj = {
        id: state.length === 1 ? 1 : state[state.length - 1].id + 1,
        optionName,
        optionHalf,
        optionSelected: state.length === 1 ? true : false,
      };

      let newArr = [...state, { ...newObj }];

      if (state.length === 1) {
        newArr[0].optionSelected = false;
      }
      return newArr;
    case "DELETE_OPTION": {
      let newArr = state.filter((option) => option.id !== action.payload);

      if (newArr.length === 1) newArr[0].optionSelected = true;

      if (newArr.length === 2) newArr[1].optionSelected = true;

      if (newArr.length > 2) {
        let index;
        state.map((option, i) => (option.id === action.payload ? (index = i) : index));
        if (state[index].optionSelected === true) {
          newArr[1].optionSelected = true;
        } else {
          return newArr;
        }
      }
      return newArr;
    }
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
