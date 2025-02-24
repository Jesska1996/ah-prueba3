import React, { useState } from 'react';

function ApiFiltro({ onFilterChange }) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [species, setSpecies] = useState(''); 

    const handleNameChange = (event)  => {
        setName(event.target.value);
        onFilterChange({ name: event.target.value, status, species }); 
    };
    
    const handleStatusChange = (event)  => {
        setStatus(event.target.value);
        onFilterChange({ name, status: event.target.value, status, species }); 
    };

    const handleSpeciesChange = (event)  => {
        setName(event.target.value);
        onFilterChange({ name, status, species: event.target.value, status, species }); 
};

return (
    <div>
        <input type='text' placeholder='Nombre' value={name} onChange={handleNameChange}/>
        <select value={status} onChange={handleNameChange}>
            <option value="">Estado</option>
            <option value="alive">Vivo</option>
            <option value="dead">Muerto</option>
            <option value="unknown">Desconocido</option>
        </select>
        <input type='text' placeholder='Especie' value={species} onChange={handleSpeciesChange}/>    
    </div>
    );

}
export default ApiFiltro;