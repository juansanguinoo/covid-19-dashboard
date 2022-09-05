const initialState = {
  confirmatedCases2021: 0,
  recoveredCases2021: 0,
  deathCases2021: 0,
  confirmatedCases2022: 0,
  recoveredCases2022: 0,
  deathCases2022: 0,
  actualData: [],
};

export const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CARDS_CONFIRMATE_2021':
      return {
        ...state,
        confirmatedCases2021: action.payload,
      };
    case 'CARDS_RECOVER_2021':
      return {
        ...state,
        recoveredCases2021: action.payload,
      };
    case 'CARDS_DEATHS_2021':
      return {
        ...state,
        deathCases2021: action.payload,
      };
    case 'CARDS_CONFIRMATE_2022':
      return {
        ...state,
        confirmatedCases2022: action.payload,
      };
    case 'CARDS_RECOVER_2022':
      return {
        ...state,
        recoveredCases2022: action.payload,
      };
    case 'CARDS_DEATHS_2022':
      return {
        ...state,
        deathCases2022: action.payload,
      };
    case 'CARDS_ACTUAL_DATA':
      return {
        ...state,
        actualData: action.payload,
      };

    default:
      return state;
  }
};
