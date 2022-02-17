import "./Nav.css";
import $ from 'jquery';
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faPaw
} from "@fortawesome/free-solid-svg-icons";
import {
    Link
} from "react-router-dom";
const btnMenu = () => {
    $(document).ready(function() {
        $("#btn-nav").click(() => {
            $(".collapse").slideToggle("slow");
            console.log("Jaime");
        })
        $("a.nav-link").click(()=>{
            $(".collapse").slideToggle("slow");
        })
    })
}
btnMenu();

function Nav({Titulo}) {
    return (
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-brand" to="/"> <FontAwesomeIcon icon={faPaw} /> {Titulo}</Link>
        <button id="btn-nav" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/mascotas">Mascotas <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/veterinaria">Veterinaria</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/duenos">Dueños</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/consultas">Consultas</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Nav;
