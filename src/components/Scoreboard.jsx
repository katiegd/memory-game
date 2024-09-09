export default function Scoreboard({ scores, finalGameList, setIsGameWon }) {
  function gameIsWon() {
    if (scores.curr === finalGameList.length) {
      setIsGameWon(true);
    }
  }
  return (
    <>
      <div className="scoreboard">
        {" "}
        <div className="current-score">
          <h2>Score:</h2>
          <p className="score">
            {" "}
            {scores.curr} / {finalGameList.length}
          </p>
        </div>
        <div className="high-score">
          <h2>High Score:</h2>
          <p className="score"> {scores.high}</p>
        </div>
      </div>
    </>
  );
}
