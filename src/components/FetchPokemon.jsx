import { useState, useEffect } from "react";

export default function FetchPokemon({
  setFinalGameList,
  restartGame,
  gameState,
}) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // Pulls the names of the first 251 Pokemon
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=251")
      .then((poke) => {
        return poke.json();
      })
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error("Error fetching Pokemon:", error);
      });
  }, [restartGame]);

  function randomizePokemon() {
    //Chooses 10 random pokemon to add to initialGameList
    const pokeArr = []; // New array of just 10 pokemon
    let deckNum;

    if (gameState === 1) {
      deckNum = 10;
    } else if (gameState === 2) {
      deckNum = 15;
    } else if (gameState === 3) {
      deckNum = 20;
    } else if (gameState === 4) {
      deckNum = 251;
    }

    if (pokemonList.length < 2) {
      throw new Error("Not enough Pokemon.");
    }
    while (pokeArr.length < deckNum) {
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

  useEffect(() => {
    if (pokemonList.length > 0) {
      const gameList = randomizePokemon();
      // Make sure the API data has loaded. Then set initial list of Pokemon.

      const fetchPromises = gameList.map((poke) =>
        fetch(poke.url).then((response) => response.json())
      );

      Promise.all(fetchPromises).then((data) => {
        setFinalGameList(data);
      });
    }
  }, [pokemonList, gameState]); // Effect depends on pokemonList loading

  return <></>;
}
