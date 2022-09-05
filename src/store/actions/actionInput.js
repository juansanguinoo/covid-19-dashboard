export const actionInputLeft = (value) => {
  return {
    type: "INPUT_VALUE_LEFT",
    payload: value,
  };
};

export const actionInputRight = (value) => {
  return {
    type: "INPUT_VALUE_RIGHT",
    payload: value,
  };
};
