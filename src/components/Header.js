import React, {  } from "react";
import { Link } from 'react-router-dom';
import SearchForm from "./SearchForm"

export default function Header(props) {
  const setSearch = props.setSearch;
  // const search = props.search;


  
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <SearchForm setSearch={setSearch}/>
      <Link to="/characters">
        Characters
      </Link>
    </header>
  );
}
