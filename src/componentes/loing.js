import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../auth/authService'; 
import './loing.css';

function Loing({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ email, password });
      alert('Inicio de sesión exitoso');
      onLogin(userData); 
      navigate('/inicio');
    } catch (error) {
      alert(error.message);
    }
  };
    return (
      <div className='loingContenedor'>
        <form onSubmit={handleSubmit}>
          <h1 className='bienvenido'>¡Bienvenidx!</h1>
          <h2 className='iniciarsesion'>Inicia Sesión</h2>
          <div>
              <label>Correo Electrónico:</label>
              <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div>
              <label htmlFor="password">Contraseña:</label>
              <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button className="enviar" type="submit">Iniciar Sesión</button>
        </form>
      </div>
  );
}

export default Loing;

