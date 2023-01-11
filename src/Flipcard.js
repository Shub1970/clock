/* {
  secondTop: 60,
  secondBottom: 60,
  secondFlip: false,
  minuteTop: 23,
  minuteBottom: 23,
  minuteFlip: false,
} */
import React from "react";
import { useState } from "react";

const Flipcard = ({ state, dispatch }) => {
  const [flip, setFlip] = useState(true);
  const flipChange = () => {
    if (state.secondBottom === 0) {
      dispatch({ type: "restartSecond" });
    }
    setTimeout(() => {
      setFlip((previous) => !previous);
    }, 10);
  };

  return (
    <>
      <div className="flip-card flip">
        <div className="top">{state.secondTop}</div>
        <div className="bottom">{state.secondBottom}</div>
        {flip && (
          <div
            className="above-top"
            onAnimationEnd={(e) => {
              dispatch({ type: "--secondTop" });
            }}
          >
            {state.secondTop}
          </div>
        )}
        {flip && (
          <div
            className="above-bottom"
            onAnimationStart={(e) => {
              dispatch({ type: "--secondBottom" });
            }}
            onAnimationEnd={(e) => {
              setFlip((previous) => !previous);
              flipChange();
            }}
          >
            {state.secondBottom}
          </div>
        )}
      </div>
    </>
  );
};

export default Flipcard;
