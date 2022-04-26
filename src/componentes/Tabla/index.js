import "./Tabla.css";
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import Encabezado from "./encabezado.js";
import Fila from "./fila.js";
import Busqueda from "./busqueda";

function Tabla({
  CambiarModal = () => {},
  columna = [],
  datos=[],
  EliminarEntidades = ()=>{},
  EditarEntidades =()=>{},
  setdatos =() =>{},
  ListarEntidades = () =>{},
  busqueda = null , 
  setBusqueda = ()=> {}, 
  tablaVeterinaria, 
  setTablaVeterinaria = () =>{},
}) {

  const cambiarModal = (Estado) => {
    CambiarModal(Estado);
  }


  return (
    <div className="container">
      <div className="flex-container">
	  <Busqueda 
	    datos = {datos} 
	    setdatos = {setdatos} 
	    ListarEntidades = {ListarEntidades}  
	    busqueda={busqueda} 
	    setBusqueda = {setBusqueda}
            tablaVeterinaria = {tablaVeterinaria}
	    setTablaVeterinaria = {setTablaVeterinaria}
       />
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
