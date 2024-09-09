import { useState, useEffect } from "react";

export default function FetchPokemon({ setFinalGameList, restartGame }) {
  const [pokemonList, setPokemonList] = useState([]);

  // Game will start with 3 cards (max of 10 Pokemon) then will do medium (4/15) and hard (5/20) difficulties

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

  useEffect(() => {
    if (pokemonList.length > 0) {
      const gameList = randomizePokemon();
      // Make sure the API data has loaded. Then set initial list of Pokemon.

      const fetchPromises = gameList.map((poke) =>
        fetch(poke.url).then((response) => response.json())
      );

      Promise.all(fetchPromises).then((data) => {
        console.log(data);
        setFinalGameList(data);
      });
    }
  }, [pokemonList]); // Effect depends on pokemonList loading

  return <></>;
}
