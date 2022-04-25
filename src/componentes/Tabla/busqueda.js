import React from "react";

function Busqueda ({
    busqueda,
    setBusqueda = () => {},
    datos,
    setdatos = () =>{},
    ListarEntidades = () => {},
    tablaVeterinaria,
    setTablaVeterinaria = () =>{},

}) {


    

    const handleChange = (e)=> {
	setBusqueda(e.target.value);
	Filtrar(e.target.value)
    }

    const Filtrar = (terminoBusqueda) => {


	var respuesta  = tablaVeterinaria[0].filter(item =>{
	    if(item.Nombre.toString().includes(terminoBusqueda)){
		return item;
	    }
	})

        setdatos([respuesta])
	//setdatos(respuesta)
	//	console.log(datos)
	//  item.filter(item2 => {
	//	if(item2.Nombre.toString().includes(terminoBusqueda)){
	//	    // console.log(item2)
	//	    return "Jaime"
	//	}
	//  })
	//}))
	//setdatos(resultadoBusqueda)	
    }
    
    

    return(
        <form className="form-inline my-2 my-lg-0">
	    <input 
		className="form-control mr-sm-2" 
		type="search" 
		value = {busqueda}
		placeholder="Search" 
		aria-label="Search"
		onChange = {handleChange}
	/>
	    <button className="btn btn-outline-success my-2 my-sm-0" 
	    type="submit"
	    >
			Search
	    </button>
        </form>
    )
}

export default Busqueda;
