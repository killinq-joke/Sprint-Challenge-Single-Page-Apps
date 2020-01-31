import React, { useEffect, useState } from "react";
// import axios from 'axios';

export default function CharacterList(props) {
  const characters = props.characters;
  // const setCharacters = props.setCharacters;

  // useEffect(() => {
  //   axios
  //   .get(`https://rickandmortyapi.com/api/character/`)
  //   .then(res => {
  //     setCharacters(res.data.results)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [])

  return (
    <section className="character-list">
      {characters.map(character => {
        return (
        <h2>{character.name}</h2>
        )
      })}
    </section>
  );
}
