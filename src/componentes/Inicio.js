import React, { useState, useEffect } from 'react';

import ApiFiltro from './AiFiltro.js';
import CharacterCard from './CharacterCard.js';

function Inicio() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({});

    useEffect(() => {
      setIsLoading(true);
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`) 
          .then(response => {
              if (!response.ok) {
                  throw new Error('Error al obtener los datos de la API');
              }
              return response.json();
          })
          .then((data) => {
              setCharacters(data.results);
              setIsLoading(false);
          })
          .catch((err) => {
              setError(err);
              setIsLoading(false);
          });
  }, [page]);

  const handleNextPage = () => {
      setPage(page + 1);
  };

  const handlePrevPage = () => {
      if (page > 1) {
          setPage(page - 1);
      }
  };

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;



  return (
    <div>
        {characters.map(character => (
            <CharacterCard key={character.id} character={character} /> // Usa el componente aquí
        ))}
        <div>
            <button onClick={handlePrevPage} disabled={page <= 1}>Anterior</button>
            <span>Página {page}</span>
            <button onClick={handleNextPage}>Siguiente</button>
        </div>
    </div>
    );
}


export default Inicio;