import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [finalGameList, setFinalGameList] = useState([]);

  return (
    <>
      <Cards
        finalGameList={finalGameList}
        setFinalGameList={setFinalGameList}
      />
    </>
  );
}

export default App;
