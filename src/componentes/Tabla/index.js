import "./Tabla.css";
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import Encabezado from "./encabezado.js";
import Fila from "./fila.js";

function Tabla({
  CambiarModal = () => {},
  columna = [],
  datos=[],
  EliminarEntidades = ()=>{},
  EditarEntidades =()=>{},
}) {

  const cambiarModal = (Estado) => {
    CambiarModal(Estado);
  }
  return (
    <div className="container">
      <div className="flex-container">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <button
	    type="button"
	    className ="btn btn-primary btn-style"
	    onClick = {cambiarModal}
	>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="table-responsive">
      <table className="table">
        <Encabezado columna ={columna} />
	<tbody>
        {
	    datos.map((item , key)  =>(
		item.map((item2 , key2) =>(
		 <Fila  
		    key ={`Fila-${key2}`}
		    data = {item2}
		    columna ={columna}
		    index= {key2}
		    EliminarEntidades ={EliminarEntidades}
		    EditarEntidades = {EditarEntidades}
		    />
		))
          ))
	}
	 </tbody>	 
      </table>

      </div>
    </div>
  )
}
export default Tabla;
