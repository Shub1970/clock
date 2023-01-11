import { useState, useEffect } from "react";
const Minflipcard = ({ state, dispatch }) => {
  const [turn, setTurn] = useState(true);
  useEffect(() => {
    if (state.secondBottom === 0) {
      setTurn((turn) => !turn);
    }
  }, [state.secondBottom]);
  return (
    <>
      <div className="flip-card flip">
        <div className="top">{state.minuteTop}</div>
        <div className="bottom">{state.minuteBottom}</div>
        {turn && (
          <div
            className="above-top"
            onAnimationEnd={(e) => {
              dispatch({ type: "--minuteTop" });
            }}
          >
            {state.minuteTop}
          </div>
        )}
        {turn && (
          <div
            className="above-bottom"
            onAnimationStart={(e) => {
              dispatch({ type: "--minuteBottom" });
            }}
            onAnimationEnd={(e) => {
              setTurn((previous) => !previous);
            }}
          >
            {state.minuteBottom}
          </div>
        )}
      </div>
    </>
  );
};

export default Minflipcard;
