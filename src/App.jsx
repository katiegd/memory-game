import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import FetchPokemon from "./components/FetchPokemon";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import LoseModal from "./components/LoseModal";
import WinModal from "./components/WinModal";

function App() {
  const [finalGameList, setFinalGameList] = useState([]);
  const [scores, setScores] = useState({ curr: 0, high: 0 });
  const [clickedList, setClickedList] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [restartGame, setRestartGame] = useState(false);
  const [gameState, setGameState] = useState(2);

  function handleRestart() {
    setRestartGame((prev) => !prev);
    setClickedList([]);
    setScores({ curr: 0, high: 0 });
    setGameState(2);
  }

  return (
    <>
      <div className="main-content">
        <Header />
        <Scoreboard scores={scores} finalGameList={finalGameList} />
        <FetchPokemon
          setFinalGameList={setFinalGameList}
          setGameState={setGameState}
          gameState={gameState}
          restartGame={restartGame}
        />
        <Cards
          finalGameList={finalGameList}
          scores={scores}
          setScores={setScores}
          clickedList={clickedList}
          setClickedList={setClickedList}
          displayedPokemon={displayedPokemon}
          setDisplayedPokemon={setDisplayedPokemon}
          setGameState={setGameState}
          gameState={gameState}
        />
      </div>
      {gameState === 1 && <LoseModal handleRestart={handleRestart} />}
      {gameState === 0 && <WinModal handleRestart={handleRestart} />}
    </>
  );
}

export default App;

// States:
// 0 is Win?
// 1 is Lose?
// 2 is Easy/default mode
// 3 is Med mode
// 4 is Hard mode
// 5 is Rules
