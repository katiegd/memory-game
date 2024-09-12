import "../Rules.css";
import rulesPic from "../assets/game.png";

export default function RulesModal({ setShowRulesModal }) {
  return (
    <>
      <div className="rules-modal">
        <div className="rules-modal-content">
          <p className="rules-modal-header">
            <img src={rulesPic} width="150px" />
            <br />
            Rules:
          </p>
          <p className="rules-modal-rules">
            Your goal is to click on all the Pokémon in the game{" "}
            <b>without clicking the same Pokémon twice.</b>
            <br /> The number of Pokémon you need to click depends on the
            difficulty level you choose: <br />
            <br />
            Easy: 10 Pokémon
            <br />
            Medium: 15 Pokémon
            <br />
            Hard: 20 Pokémon
            <br />
            Insane: 251 Pokémon <br />
            <br />
            If you beat one level, the next level will automatically unlock!
          </p>
          <br />
          <div className="button-wrapper">
            <button
              className="rules-close"
              onClick={() => setShowRulesModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
