import { useEffect, useState } from 'react';
import ItemList from './ItemList'
import axios from 'axios';
import { useParams } from 'react-router-dom';


let ItemListContainer = () => {
    const [characters, setCharacters] = useState([]);

    const url = "https://rickandmortyapi.com/api/character";

    const {idSpecies} = useParams();

    console.log(idSpecies);

        useEffect (() => {
            fetchCharacters(url, characters.filter(characters => characters.species === idSpecies));
        }, []);
        
        const fetchCharacters = (url) => {
            axios
                .get(url)
                .then(response => {
                    setCharacters(characters.concat(characters.species));
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
