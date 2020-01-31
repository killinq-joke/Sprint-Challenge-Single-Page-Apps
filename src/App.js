import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import axios from "axios";
import CharacterList from './components/CharacterList'


export default function App() {
  // const [characters, setCharacters] = useState([])

  // useEffect(() => {
  //   axios
  //   .get(`https://rickandmortyapi.com/api/character/`)
  //   .then(res => {
  //     console.log(res.data.results)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [])

  return (
    <main>
      <Route exact path="/">
        <Header />
      </Route>
      
      <Route exact path="/characters">
        <CharacterList />
      </Route>
    </main>
  );
}
