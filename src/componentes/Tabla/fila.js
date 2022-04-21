import Btn from "./btn.js"


function Fila({
    data,
    columna,
    index,
    EliminarEntidades = () =>{},
    EditarEntidades = () => {},
}) {
    const EvaluarDatos = ({
        data,
        item
    }) => {
        switch (item) {
            case "veterinaria":
                return `${data[item].Nombre}  (${data[item].Apellido})`;
                break;
            case "mascota":
                return `${data[item].Nombre} (${data[item].Raza})`;
                break;
            case "dueno":
                return `${data[item].Nombre} (${data[item].Dni})`;
                break;
            default:
                return `${data[item]}`;
        }
    }


    return (
        <tr>
		<th scope="row">{index}</th>
		{
		    columna.map((item , _index) =>(
			<td key ={`col-${item}-${_index}`}>{
			    EvaluarDatos({data ,item})
			}
			</td>
		    ))
		}
		<td>
		    <div className="btn-group">	    
			<Btn
			    tipo="editar"
			    onClick = {(e)=> EditarEntidades(e,index)}
			    data-index = {index}
			/>
			<Btn
			    tipo="eliminar"
			    onClick={(e) => EliminarEntidades(e,index)}
			/>
		    </div>
		</td>	
	    </tr>
    )
}
export default Fila
