import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import ApiFiltro from './AiFiltro.js';
import error from './error.js';
import loading from './Loading.js';

import './style.css';

function ApiTres() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(3);
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

export default ApiTres;