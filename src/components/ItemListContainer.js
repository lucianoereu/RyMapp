import { useEffect, useState } from 'react';
import ItemList from './ItemList'
import axios from 'axios';
import { useParams } from 'react-router-dom';


let ItemListContainer = () => {
    const [characters, setCharacters] = useState([]);

    const url = "https://rickandmortyapi.com/api/character";
    const urlSpecies="https://rickandmortyapi.com/api/character/?species"

    const {idSpecies} = useParams();

    console.log(idSpecies);

        useEffect (() => {
            fetchCharacters(url,urlSpecies);

        }, []);
        
        const fetchCharacters = (url,urlSpecies) => {
            axios
                .get(url,urlSpecies)
                .then(response => {
                    setCharacters(response.data.results);
                })
                .catch(error => {
                    console.log(error);
                }
            );
        };

    return (
        <>
        
      <ItemList characters={characters} />

        </>
    )
}

export default ItemListContainer;
