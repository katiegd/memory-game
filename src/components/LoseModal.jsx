import "../LoseModal.css";
import snorlax from "../assets/avatar.png";

export default function LoseModal({ handleRestart }) {
  return (
    <>
      <div className="lose-modal">
        <div className="lose-modal-content">
          <span className="close" onClick={handleRestart}>
            &times;
          </span>
          <p className="lose-modal-header">
            <img src={snorlax} width="150px" />
            <br></br>
            Sorry, you lost!
          </p>
          <p>You clicked on the same Pokemon twice.</p>
          <div className="button-wrapper">
            <button className="lose-try-again" onClick={handleRestart}>
              Try Again?
            </button>
            <button
              className="lose-change-difficulty"
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
