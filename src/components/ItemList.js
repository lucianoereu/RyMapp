import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import Items from "./Items";

function ItemList() {
  const [characters, setCharacters] = useState([]);
  
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    fetchCharacters(url);

  }, []);

  return (
    <>
      <Items characters={characters} />  
        
    </>
  );
}

export default ItemList;
