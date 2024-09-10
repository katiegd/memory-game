import "../Header.css";
export default function Header({ setGameState }) {
  return (
    <>
      <div className="header">
        <h1>Pokemon Memory Game</h1>
        <button className="rules-btn" onClick={() => setGameState(5)}>
          How To Play
        </button>
      </div>
    </>
  );
}
