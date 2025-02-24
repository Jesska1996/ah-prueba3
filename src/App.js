import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Loing from './componentes/loing.js';
import Inicio from './componentes/Inicio.js';
import  './componentes/card.css';
import CharacterCard from './componentes/CharacterCard.js';
import ProtectedRoute from './componentes/ProtectedRoute.js';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (userData) => {
    console.log("Usuario autenticado:", userData);
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
};

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" 
            element={<Loing onLogin={handleLogin} />}
            />
            <Route
                path="/inicio"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                      <Inicio />
                  </ProtectedRoute>
                }
            />
        </Routes>
    </BrowserRouter>
  );
}

export default App;