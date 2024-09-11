import "../Header.css";
import Scoreboard from "./Scoreboard";
export default function Header({
  setGameState,
  setShowRulesModal,
  handleRestart,
  scores,
  finalGameList,
}) {
  function setDiff(level) {
    handleRestart();
    setGameState(level);
  }

  return (
    <>
      <div className="header">
        <div className="buttons-container">
          <button className="rules-btn" onClick={() => setShowRulesModal(true)}>
            How To Play
          </button>
          <div className="difficulty-btns">
            <button className="easy-btn" onClick={() => setDiff(1)}>
              Easy
            </button>
            <button className="med-btn" onClick={() => setDiff(2)}>
              Medium
            </button>
            <button className="hard-btn" onClick={() => setDiff(3)}>
              Hard
            </button>
          </div>
        </div>
        <h1>Pokemon Memory Game</h1>

        <Scoreboard scores={scores} finalGameList={finalGameList} />
      </div>
    </>
  );
}

// States:
// 1 is Easy/default mode
// 2 is Med mode
// 3 is Hard mode
