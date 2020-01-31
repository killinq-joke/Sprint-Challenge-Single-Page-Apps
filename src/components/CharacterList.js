import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res => {
      setCharacters(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <section className="character-list">
      {characters.map(el => {
        return (
        <h2>{el.name}</h2>
        )
      })}
    </section>
  );
}
