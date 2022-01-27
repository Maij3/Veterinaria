import {useState} from "react";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
const Pagina = () =>{

  const [MostrarModal , CambiarModal] =useState(false);
  

  return(
    <div className="container">
      <Nav />
        <Tabla MostrarModal={MostrarModal} CambiarModal = {CambiarModal} />
        { MostrarModal  &&  <Modal CambiarModal = {CambiarModal} /> }
      <Footer />
    </div>
  )
}

export default Pagina;
