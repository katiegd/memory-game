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
  const [difficulty, setDifficulty] = useState(0);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [restartGame, setRestartGame] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  function handleRestart() {
    setIsGameOver(false);
    setIsGameWon(false);
    setRestartGame((prev) => !prev);
    setClickedList([]);
    setScores({ curr: 0, high: 0 });
  }

  return (
    <>
      <div className="main-content">
        <Header />
        <Scoreboard scores={scores} finalGameList={finalGameList} />
        <FetchPokemon
          setFinalGameList={setFinalGameList}
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
          setIsGameOver={setIsGameOver}
          setIsGameWon={setIsGameWon}
        />
      </div>
      {isGameOver && <LoseModal handleRestart={handleRestart} />}
      {isGameWon && <WinModal handleRestart={handleRestart} />}
    </>
  );
}

export default App;
