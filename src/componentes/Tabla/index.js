import "./Tabla.css";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";

function Tabla ({
  CambiarModal = () =>{},
}) {

  const cambiarModal = (Estado) =>{
    CambiarModal(Estado);
  }
  
  return(
    <div className="container">
        <button 
          type="button" 
          className ="btn btn-primary btn-style"
          onClick = {cambiarModal} 
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}
export default Tabla;
