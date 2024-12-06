import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importando rutas
import Login from './login-form';
import Register from './register-form';
import './styles/globals.css';

// Rutas de categorías
import Categoria_recetas from './admin/categoria_recetas';

// Rutas de menús
import Menuuser from './Menus/Menuuser';
import Menuadmin from './Menus/Menuadmin';

// Importando rutas de controles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal - Login */}
        <Route path="/" element={<Login />} />
        
        {/* Ruta de login */}
        <Route path="/loginForm" element={<Login />} />
        
        {/* Ruta de registro */}
        <Route path="/register-form" element={<Register />} />

        {/* Ruta para el menú admin */}
        <Route path="/menus/Menuadmin" element={<Menuadmin />} />
        
        {/* Ruta para el menú de usuario */}
        <Route path="/menus/Menuuser" element={<Menuuser />} />

        {/* Ruta para categorías */}
        <Route path="/admin/categoria_recetas" element={<Categoria_recetas />} />

      </Routes>
    </Router>
  );
}

export default App;
