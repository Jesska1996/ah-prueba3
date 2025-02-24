import React from 'react';

import './card.css';


function CharacterCard({ character }) {
    return (
      <div className="fondo-inicio">
        <div className="card-contenedor">
          <div className="character-card">
            <img
              src={character.image}
              alt={character.name}
              className="character-image"
            />
            <h2 className="name-card">{character.name}</h2>
            <p className="status-card">Status: {character.status}</p>
            <p className="species-card">Species: {character.species}</p>
          </div>
        </div>
      </div>
    );
  }
export default CharacterCard;