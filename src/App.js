import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom';
import Header from "./components/Header.js";
import axios from "axios";

import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';


export default function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState([]);

  console.log(search)

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
    <main>
      <Link to="/">HOME</Link>
      <Route exact path="/">
        <Header setSearch={setSearch}/>
        <WelcomePage />
      </Route>

      <Route exact path="/characters/card">
        <CharacterCard search={search}/>
      </Route>
      
      <Route exact path="/characters">
        <CharacterList characters={characters} setCharacters={setCharacters}/>
      </Route>
    </main>
  );
}
