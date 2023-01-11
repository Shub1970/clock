import "./App.css";
import { useReducer } from "react";
import Flipcard from "./Flipcard";
import reducer from "./reducer";
import Minflipcard from "./Minflipcard";

const defaultState = {
  secondTop: 60,
  secondBottom: 60,
  minuteTop: 23,
  minuteBottom: 23,
};
function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <>
      <Minflipcard state={state} dispatch={dispatch} />
      <Flipcard state={state} dispatch={dispatch} />
    </>
  );
}

export default App;
