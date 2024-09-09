import { useEffect, useState } from "react";
import "../Cards.css";

export default function Cards({
  finalGameList,
  setScores,
  setClickedList,
  clickedList,
  displayedPokemon,
  setDisplayedPokemon,
  setIsGameOver,
}) {
  useEffect(() => {
    if (finalGameList.length > 0) {
      // Filter unclicked Pokemon
      const unclickedPokemon = finalGameList.filter(
        (pokemon) => !clickedList.includes(pokemon.name)
      );

      const numOfVisible = 3; // Need to make this based on the difficulty.
      const visiblePokemon = new Set();

      if (unclickedPokemon.length > 0) {
        // Ensure at least one unclicked Pokemon is visible
        visiblePokemon.add(
          unclickedPokemon[Math.floor(Math.random() * unclickedPokemon.length)] // Add index of random unclicked Pokemon
        );
      }

      // Fill rest of slots with clicked or unclicked Pokemon
      while (visiblePokemon.size < numOfVisible) {
        const randomPokemon =
          finalGameList[Math.floor(Math.random() * finalGameList.length)];
        visiblePokemon.add(randomPokemon);
      }
      setDisplayedPokemon([...visiblePokemon]);
    }
  }, [finalGameList, clickedList]);

  function shuffleArray(array) {
    //Fisher-Yates Sorting Algorithm
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

    if (clickedList.includes(pokeName)) {
      alert("YOU LOSE!"); //Replace with function later.
      setScores((prevScore) => ({
        ...prevScore,
        curr: 0,
      }));
      setIsGameOver(true);
    } else {
      setScores((prevScore) => {
        const newCurr = prevScore.curr + 1;
        return {
          ...prevScore,
          curr: newCurr,
          high: newCurr > prevScore.high ? newCurr : prevScore.high,
        };
      });
      setClickedList((prevClickedList) => [...prevClickedList, pokeName]);
    }

    shuffleArray(finalGameList);
  }

  return (
    <div className="cards-container">
      {displayedPokemon.length > 0
        ? displayedPokemon.map((pokemon) => (
            <div
              className="poke-card"
              id={pokemon.name}
              key={pokemon.name}
              onClick={(e) => handleCards(e)}
            >
              <p>{pokemon.name}</p>
              <img
                id={pokemon.name}
                key={pokemon.id}
                src={pokemon.sprites.front_default}
                width="200px"
                height="200px"
              />
            </div>
          ))
        : "Loading Pokemon..."}
    </div>
  );
}
