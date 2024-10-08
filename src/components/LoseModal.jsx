import "../LoseModal.css";
import snorlax from "../assets/avatar.png";

export default function LoseModal({ handleRestart, setShowLoseModal }) {
  function closeLoseModal() {
    setShowLoseModal(false);
    handleRestart();
  }

  return (
    <>
      <div className="lose-modal">
        <div className="lose-modal-content">
          <p className="lose-modal-header">
            <img src={snorlax} width="150px" />
            <br></br>
            Sorry, you lost!
          </p>
          <p>You clicked on the same Pokemon twice.</p>
          <div className="button-wrapper">
            <button className="lose-try-again" onClick={() => closeLoseModal()}>
              Try Again?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
