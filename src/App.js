import Pagina from "./Pagina.js";
import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path ="/" element ={<Pagina Titulo="Mascotas" Entidad = "mascotas" />} />
      <Route  path ="/mascotas" element ={<Pagina Titulo="Mascotas" Entidad = "mascotas" />} />
      <Route  path ="/veterinaria" element ={<Pagina Titulo="Veterinaria" Entidad = "veterinaria" />} />
      <Route  path ="/duenos" element ={<Pagina Titulo="Dueños" Entidad = "duenos" />} />
      <Route  path ="/consultas" element ={<Pagina Titulo="Consultas" Entidad = "consultas" />} />
    </Routes>
  );
}

export default App;
