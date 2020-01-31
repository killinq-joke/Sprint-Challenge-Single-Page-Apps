import React from "react";

export default function CharacterCard(props) {
  console.log(props)
  const search = props.search;

  return(
    <div>
  <h1>{search.name}</h1>
  <h1>Status: {search.status}</h1>
  <h1>Species {search.species}</h1>
  <h1>Gender: {search.gender}</h1>
  <img src={search.image}/>
  </div>
  ) ;
}
