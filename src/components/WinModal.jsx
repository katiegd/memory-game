import "../WinModal.css";
import happyPikachu from "../assets/avatar-pk.png";

export default function WinModal({ handleRestart }) {
  return (
    <>
      <div className="win-modal">
        <div className="win-modal-content">
          <span className="close" onClick={handleRestart}>
            &times;
          </span>
          <p className="win-modal-header">
            <img src={happyPikachu} width="150px" />
            <br></br>
            Congratulations! You win!
          </p>
          <p>You have the memory of a wise Snorlax.</p>
          <div className="button-wrapper">
            <button className="win-try-again" onClick={handleRestart}>
              Try Again?
            </button>
            <button
              className="win-change-difficulty"
              onClick={() => changeDifficulty()}
            >
              Change Difficulty
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
