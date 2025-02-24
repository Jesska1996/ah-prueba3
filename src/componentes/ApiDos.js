import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import ApiFiltro from './ApiFiltro.js';
import error from './error.js';
import loading from './Loading.js';

import './style.css';

function ApiDos() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(2);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        setLoading(true);
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((Response) => Response.json()) 
        .then((data) => {
            setCharacters(data.results);
            setIsLoading(false);
        }) 
        
        .catch((err) =>{
            setError(err);
            setIsLoading(false);
        }); 
    }, [page]);
    

    if (isLoading) return <Loading />;
    if (error) return <Error message={error.message} />;

    return (
        <div>
            {characters.map((characters) => (
             <CharacterCard key={character.id} character={character} />   
            ))}
        </div>
    );
}

export default ApiDos;