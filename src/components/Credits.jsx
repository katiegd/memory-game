import "/src/Credits.css";
import charmander from "../assets/charmander.png";
export default function Credits({ setShowCredits }) {
  function closeCreditsModal() {
    setShowCredits(false);
  }

  return (
    <>
      <div className="credits-modal">
        <div className="credits-modal-content">
          <p className="lose-modal-header">
            <img src={charmander} width="150px" />
            <br></br>
            Credits
          </p>
          <p>
            Design & code by Katie Duryea as a part of{" "}
            <a href="https://www.theodinproject.com/lessons/node-path-react-new-memory-card">
              The Odin Project
            </a>
          </p>
          <a href="https://pokeapi.co/">Pokemon API</a>
          <a
            href="https://www.reddit.com/r/MinimalWallpaper/comments/4wsm1i/minimal_pokemon_wallpaper_1920x1080/"
            title="wallpaper"
          >
            Wallpaper
          </a>
          <a
            href="https://www.flaticon.com/free-icons/pokemon"
            title="pokemon icons"
          >
            Pokemon icons created by Darius Dan - Flaticon
          </a>

          <a
            href="https://www.flaticon.com/free-icons/pokemon"
            title="pokemon icons"
          >
            Pokemon icons created by Roundicons Freebies - Flaticon
          </a>

          <a
            href="https://www.flaticon.com/free-icons/pikachu"
            title="pikachu icons"
          >
            Pikachu icons created by Darius Dan - Flaticon
          </a>

          <a
            href="https://www.flaticon.com/free-icons/pokemon"
            title="pokemon icons"
          >
            Pokemon icons created by Nikita Golubev - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/pokemon"
            title="pokemon icons"
          >
            Pokemon icons created by Roundicons Freebies - Flaticon
          </a>

          <button className="close-credits" onClick={() => closeCreditsModal()}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
