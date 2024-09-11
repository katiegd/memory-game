import "../WinModal.css";
import happyPikachu from "../assets/avatar-pk.png";

export default function WinModal({
  handleRestart,
  setShowWinModal,
  setGameState,
  gameState,
}) {
  const nextGame = gameState + 1;

  function closeWinModal() {
    setShowWinModal(false);
    handleRestart();
  }

  function nextLevel() {
    closeWinModal();
    setGameState(nextGame);
  }

  return (
    <>
      <div className="win-modal">
        <div className="win-modal-content">
          <span className="close" onClick={() => closeWinModal()}>
            &times;
          </span>
          <p className="win-modal-header">
            <img src={happyPikachu} width="150px" />
            <br></br>
            Congratulations! You win!
          </p>
          <p>You have the memory of a wise Snorlax.</p>
          <div className="button-wrapper">
            <button className="win-try-again" onClick={() => closeWinModal()}>
              Try Again?
            </button>
            <button className="win-next-level" onClick={() => nextLevel()}>
              Next Level
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
