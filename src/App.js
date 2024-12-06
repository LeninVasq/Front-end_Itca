import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importando rutas
import Login from './login-form';
import Register from './register-form';

import './styles/globals.css'

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
        {/* Ruta principal */}
        <Route path="/" element={<Login />} />
        
        {/* Ruta de login */}
        <Route path="/loginForm" element={<Login />} />

       {/* Ruta principal con Layout contenedor */}
         <Route path="/" element={<Menuadmin />}>
          {/* Rutas que usan el Layout como contenedor */}
          <Route path="menus/Menuuser" element={<Menuadmin/>} />
          <Route path="admin/categoria_recetas" element={<Categoria_recetas />} />
          <Route path="/register-form" element={<Register />} />

        </Route>
                {/* Si quieres añadir más rutas adicionales, agrégalas aquí */}

      </Routes>
    </Router>
  );
}

export default App;
