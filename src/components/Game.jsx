import { useState, useEffect } from "react"
import { fetchCharacters } from "./Data.js";
import "./../styles/Game.css";

const initCharacters = await fetchCharacters();

export function Game({children}) {
  const [characters, setCharacters] = useState(initCharacters);
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  if (!characters) return null;
  console.log(characters);

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
      <CardsContainer characters={characters}/>
    </div>
  );
}

function CardsContainer({ characters }) {
  return (
    <div className={"cards"}>
      {
        characters.map((item) => {
          return (
            <CharacterCard 
              key={item.character.mal_id} 
              character={item.character}
            />
          )
        })
      }
    </div>
  )
}

function CharacterCard({ character }) {
  return (
    <div className={"card"}>
      <div className={"character-image"}>
        <img src={character.images.jpg.image_url} alt={character.name}/>
      </div>
      <div className={"character-name"}>
        <p>{character.name}</p>
      </div>
    </div>
  );
}
