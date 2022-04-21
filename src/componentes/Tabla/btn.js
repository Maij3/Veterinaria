import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

function CambiarClaseBtn({
    index,
    tipo,
    onClick = () => {}
}) {
    return (
        <button type="button" className={classNames("btn" , {
	    "btn-info": tipo==="editar",
	    "btn-danger": tipo==="eliminar",
	})} 
	onClick = {(e) => onClick(e, index)}>
	{tipo==="editar" && <FontAwesomeIcon icon={faEdit}/>}
	{tipo==="eliminar" && <FontAwesomeIcon icon={faTrashAlt}/>}
	</button>
    )
}

export default CambiarClaseBtn;
