import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import FetchPokemon from "./components/FetchPokemon";
import Header from "./components/Header";
import LoseModal from "./components/LoseModal";
import WinModal from "./components/WinModal";
import RulesModal from "./components/RulesModal";
import Credits from "./components/Credits";

function App() {
  const [finalGameList, setFinalGameList] = useState([]);
  const [scores, setScores] = useState({ curr: 0, high: 0 });
  const [clickedList, setClickedList] = useState([]);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const [restartGame, setRestartGame] = useState(false);
  const [gameState, setGameState] = useState(1);
  const [showWinModal, setShowWinModal] = useState(false);
  const [showLoseModal, setShowLoseModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  function handleRestart() {
    setRestartGame((prev) => !prev);
    setClickedList([]);
    setScores({ curr: 0, high: scores.high });
  }

  function showCreditsModal() {
    setShowCredits(true);
  }

  return (
    <>
      <div className="main-content">
        <Header
          setGameState={setGameState}
          setShowRulesModal={setShowRulesModal}
          handleRestart={handleRestart}
          scores={scores}
          finalGameList={finalGameList}
        />
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
          setShowLoseModal={setShowLoseModal}
          setShowWinModal={setShowWinModal}
        />
      </div>
      {showLoseModal && (
        <LoseModal
          handleRestart={handleRestart}
          setShowLoseModal={setShowLoseModal}
        />
      )}
      {showWinModal && (
        <WinModal
          handleRestart={handleRestart}
          setShowWinModal={setShowWinModal}
          setGameState={setGameState}
          gameState={gameState}
        />
      )}
      {showRulesModal && <RulesModal setShowRulesModal={setShowRulesModal} />}
      {showCredits && <Credits setShowCredits={setShowCredits} />}
      <button className="credits-btn" onClick={showCreditsModal}>
        Credits
      </button>
    </>
  );
}

export default App;

// States:
// 1 is Easy/default mode
// 2 is Med mode
// 3 is Hard mode
