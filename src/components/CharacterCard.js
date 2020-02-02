import React from "react";
import styled from "styled-components";

export default function CharacterCard(props) {
  console.log(props)
  const search = props.search;

  

  return(
    <div>
  <h1>{search.name}</h1>
  <h2>Status: {search.status}</h2>
  <h2>Species {search.species}</h2>
  <h2>Gender: {search.gender}</h2>
  <img src={search.image}/>
  </div>
  ) ;
}
