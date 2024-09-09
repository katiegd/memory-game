import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [finalGameList, setFinalGameList] = useState([]);
  const [scores, setScores] = useState({ curr: "", high: "" });

  return (
    <>
      <Scoreboard />
      <Cards
        finalGameList={finalGameList}
        setFinalGameList={setFinalGameList}
        scores={scores}
        setScores={setScores}
      />
    </>
  );
}

export default App;
