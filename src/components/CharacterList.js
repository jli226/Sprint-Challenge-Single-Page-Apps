import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    const url = props.match.url;

    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      setCharData(response.data.results);
      // console.log('axios character:', response.data.results)
    });
  }, [props.match.url]);
  // console.log('data character:', data)
  return (
    <section className="character-list grid-view">
      {charData.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          status={character.status}
          location={character.location.name}
          episodes={character.episodes}
          image={character.image}
          origin={character.origin.name}
        />
      ))}
    </section>
  );
}
