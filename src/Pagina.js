import {
  useState,
  useEffect
} from "react";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
import {
  ListarEntidad
} from "./Servicios.js";

function Pagina({ Titulo, Entidad }) {
  const [MostrarModal, CambiarModal] = useState(false);
  const [datos, setdatos] = useState([]);
  const [columna, setcolumna] = useState([]);

  const ListarEntidades = async () => {
    const resp = await ListarEntidad({ Entidad })
    console.log(resp[0])
    setdatos([resp])
    setcolumna(Object.keys(resp[0]));
  }

  useEffect(() => {
    ListarEntidades();
  }, [Entidad])


  return (
    <div className="container">
      <Nav Titulo={Titulo} />
      <Tabla
        MostrarModal={MostrarModal}
        CambiarModal={CambiarModal}
        columna={columna}
        datos={datos}
      />
      {MostrarModal && <Modal CambiarModal={CambiarModal} />}
      <Footer />
    </div>
  )
}

export default Pagina;
