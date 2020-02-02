import React, { useState, useEffect } from "react";
import { Route, Link, NavLink } from 'react-router-dom';
import Header from "./components/Header.js";
import axios from "axios";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import styled from 'styled-components';

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

  const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  color: #333333;
  text-align: center;
  `

  return (
    <main>
      <nav className="topnav">
      <NavLink exact to="/" activeClassName="active" className="button" replace>HOME</NavLink>
      <NavLink exact to="/characters" activeClassName="active" className="button" replace>Characters List</NavLink>
      </nav>
      
      <Div>
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
      
      </Div>
    </main>
  );
}
