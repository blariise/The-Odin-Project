import { useState, useEffect } from "react"
import { fetchCharacters } from "./Data.js";
import "./../styles/Game.css";

const initCharacters = await fetchCharacters();

export function Game({children}) {
  const [characters, setCharacters] = useState(initCharacters);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);

  let isGameOver = false;

  if (!characters) return null;

  function handleClick(characterId) {
    if (clickedIds.includes(characterId)) {
      restartGame();
      return;
    }
    setCurrentScore(currentScore + 1);
    addClickedId(characterId);
    setCharacters(getShuffledArray(characters));
  }

  function restartGame() {
    setBestScore(currentScore);
    setCurrentScore(0);
    setClickedIds([]);
    setCharacters(getShuffledArray(characters));
  }

  function addClickedId(characterId) {
    setClickedIds([...clickedIds, characterId]);
  }

  function checkIfGameOver() {
    if (currentScore === characters.length) {
      console.log("Gameover");
      isGameOver = true;
    }
  }

  function getShuffledArray(arr) {
    let arrCopy = [...arr];
    if (arr.length < 2) return arrCopy;
    for (let i = 0; i < arr.length; ++i) {
      let randomIndex = Math.floor(Math.random() * (arr.length - 1));
      let temp = arrCopy[i];
      arrCopy[i] = arrCopy[randomIndex];
      arrCopy[randomIndex] = temp;
    }
    return arrCopy;
  }

  checkIfGameOver();

  return (
    <div className={"game-container"}>
      <div className={"game-info"}>
        <div className={"game-title"}>
          {"Memory game"}
        </div>
        <div className={"game-scores"}>
          <div className={"game-current-score"}>
            {`Score: ${currentScore}`}
          </div>
          <div className={"game-current-score"}>
            {`Best score: ${bestScore}`}
          </div>
        </div>
      </div>
      <CardsContainer
        characters={characters}
        handleClick={handleClick}
        isGameOver={isGameOver}
      />
      { 
        isGameOver && 
          <div className={"game-over"} onClick={restartGame}>
            <p>Congratulation, You won!</p>
          </div>
      }
    </div>
  );
}

function CardsContainer({ characters, handleClick, isGameOver }) {
  const classN = isGameOver ? "cards hide" : "cards";
  return (
    <div className={classN}>
      {
        characters.map((item) => {
          return (
            <CharacterCard 
              key={item.character.mal_id} 
              character={item.character}
              handleClick={handleClick}
            />
          )
        })
      }
    </div>
  );
}

function CharacterCard({ character, handleClick}) {
  return (
    <div className={"card"} onClick={() => handleClick(character.mal_id)}>
      <div className={"character-image"}>
        <img src={character.images.jpg.image_url} alt={character.name}/>
      </div>
      <div className={"character-name"}>
        <p>{character.name}</p>
      </div>
    </div>
  );
}
