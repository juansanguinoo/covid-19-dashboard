const initialState = {
  valueLeft: "",
  valueRight: "",
};

export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_VALUE_LEFT":
      return {
        ...state,
        valueLeft: action.payload,
      };
    case "INPUT_VALUE_RIGHT":
      return {
        ...state,
        valueRight: action.payload,
      };
    default:
      return state;
  }
};
