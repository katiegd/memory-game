import { useState, useEffect } from "react";
import "../Cards.css";

export default function FetchPokemon({ finalGameList, setFinalGameList }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [initialGameList, setInitialGameList] = useState([]);
  const [clickCount, setClickCount] = useState(false);
  const [clickedList, setClickedList] = useState([]);

  // Game will start with 3 cards (max of 10 Pokemon) then will do medium (4/15) and hard (5/20) difficulties

  useEffect(() => {
    // Pulls the names of the original 151 Pokemon
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      .then((poke) => {
        return poke.json();
      })
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon:", error);
      });
  }, []);

  useEffect(() => {
    if (pokemonList.length > 0) {
      const gameList = randomizePokemon();
      setInitialGameList(gameList);
      // Make sure the API data has loaded. Then set initial list of Pokemon.

      const fetchPromises = initialGameList.map((poke) =>
        fetch(poke.url).then((response) => response.json())
      );

      Promise.all(fetchPromises).then((data) => {
        setFinalGameList(data);
      });
    }
  }, [pokemonList]); // Effect depends on pokemonList loading

  function randomizePokemon() {
    //Chooses 10 random pokemon to add to initialGameList
    const pokeArr = []; // New array of just 10 pokemon
    if (pokemonList.length < 2) {
      throw new Error("Not enough Pokemon.");
    }
    while (pokeArr.length < 10) {
      const randomPokeIndex = Math.floor(Math.random() * pokemonList.length); // Generates a random index based on the length of the pokemonList
      const randomPokemon = pokemonList[randomPokeIndex];

      if (!pokeArr.some((poke) => poke.pokemon.name === randomPokemon.name)) {
        pokeArr.push({
          pokemon: randomPokemon,
          url: randomPokemon.url,
        });
      }
    }
    return pokeArr;
  }

  function shuffleArray(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  function handleCards(e) {
    const pokeName = e.target.id;
    setClickCount(true);

    if (clickedList.includes(pokeName)) {
      alert("YOU LOSE!");
    } else {
      setClickedList((prevClickedList) => [...prevClickedList, pokeName]);
    }

    console.log(clickedList);
    shuffleArray(finalGameList);
  }

  return (
    <div className="cards-container">
      {finalGameList.length > 0
        ? finalGameList.slice(0, 3).map((pokemon) => (
            <div
              className="poke-card"
              id={pokemon.name}
              key={pokemon.name}
              onClick={(e) => handleCards(e)}
            >
              <p>{pokemon.name} </p>
              <img
                id={pokemon.name}
                key={pokemon.id}
                src={pokemon.sprites.front_default}
                width="150px"
                height="150px"
              />
            </div>
          ))
        : "Loading Pokemon..."}
    </div>
  );
}
