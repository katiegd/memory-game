import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import FetchPokemon from "./components/FetchPokemon";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import LoseModal from "./components/LoseModal";

function App() {
  const [finalGameList, setFinalGameList] = useState([]);
  const [scores, setScores] = useState({ curr: 0, high: 0 });
  const [clickedList, setClickedList] = useState([]);
  const [difficulty, setDifficulty] = useState(0);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  return (
    <>
      <div className="main-content">
        <Header />
        <Scoreboard scores={scores} finalGameList={finalGameList} />
        <FetchPokemon setFinalGameList={setFinalGameList} />
        <Cards
          finalGameList={finalGameList}
          scores={scores}
          setScores={setScores}
          clickedList={clickedList}
          setClickedList={setClickedList}
          displayedPokemon={displayedPokemon}
          setDisplayedPokemon={setDisplayedPokemon}
          setIsGameOver={setIsGameOver}
        />
      </div>
      {isGameOver && <LoseModal setIsGameOver={setIsGameOver} />}
    </>
  );
}

export default App;
