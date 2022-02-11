import React, { useEffect, useState } from "react";
import axios from "axios";
// components
import ItemLists from "./ItemList";

function Items() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    axios
      .get(url)
      .then((data) => {
        setCharacters(data.data.results);
        setInfo(data.data.info);
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
      <ItemLists characters={characters} />     
    </>
  );
}

export default Items;