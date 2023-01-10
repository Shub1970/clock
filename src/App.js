import "./App.css";
import { useState } from "react";
function App() {
  const [toptime, setTopTime] = useState(9);
  const [bottomtime, setBottomTime] = useState(9);
  const [flip, setFlip] = useState(true);
  const flipChange = () => {
    if ((toptime, bottomtime > 0)) {
      setTimeout(() => {
        setFlip((previous) => !previous);
      }, 1);
    }
  };
  return (
    <>
      <div class="flip-card flip">
        <div class="top">{toptime}</div>
        <div class="bottom">{bottomtime}</div>
        {flip && (
          <div
            className="above-top"
            onAnimationEnd={(e) => {
              setTopTime((currentTime) => currentTime - 1);
            }}
          >
            {toptime}
          </div>
        )}
        {flip && (
          <div
            className="above-bottom"
            onAnimationStart={(e) => {
              setBottomTime((currentTime) => currentTime - 1);
            }}
            onAnimationEnd={(e) => {
              setFlip((current) => !current);
              flipChange();
            }}
          >
            {bottomtime}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
