/* {
  secondTop: 60,
  secondBottom: 60,
  secondFlip: false,
  minuteTop: 23,
  minuteBottom: 23,
} */

const reducer = (state, action) => {
  if (action.type === "--secondTop") {
    const t = state.secondTop - 1;
    return { ...state, secondTop: t };
  } else if (action.type === "--secondBottom") {
    const t = state.secondBottom - 1;
    return { ...state, secondBottom: t };
  } else if (action.type === "--minuteTop") {
    const t = state.minuteTop - 1;
    return { ...state, minuteTop: t };
  } else if (action.type === "--minuteBottom") {
    const t = state.minuteBottom - 1;
    return { ...state, minuteBottom: t };
  } else if (action.type === "restartSecond") {
    return { ...state, secondBottom: 60, secondTop: 60 };
  }
};

export default reducer;
