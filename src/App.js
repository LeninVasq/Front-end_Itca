import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Importando rutas
import Login from './login-form';
import Register from './register-form';
import './styles/globals.css';

// Rutas de categorías
import Categoria_recetas from './admin/categoria_recetas';

// Rutas de menús
import Menuuser from './Menus/Menuuser';
import Menuadmin from './Menus/Menuadmin';

// Importando estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <Routes>
        

        {/* Ruta de login */}
        <Route path="/" element={<Login />} />

        {/* Ruta para registro */}
        <Route path="/register-form" element={<Register />} />

        {/* Rutas anidadas para el administrador */}
        <Route path="/admin" element={<Menuadmin />}>
          {/* Subrutas del administrador */}
          <Route path="categoria_recetas" element={<Categoria_recetas />} />
          <Route path="register-form" element={<Register />} />

        </Route>

        {/* Rutas anidadas para el usuario */}
        <Route path="/menus/Menuuser" element={<Menuuser />}>
          {/* Aquí puedes añadir más subrutas específicas del usuario */}
          <Route path="categoria_recetas" element={<Categoria_recetas />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
