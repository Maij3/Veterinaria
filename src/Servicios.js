const API_URL = "http://localhost:5000";

export const ListarEntidad = async ({Entidad}) => {
    try {
        const res = await fetch(`${API_URL}/${Entidad}`);
        const datos = await res.json();
        return datos
    } catch (error) {
        console.error(error)
    }
}//Listar Entidad

export const EliminarEntidad = async ({
    Entidad= "mascotas",
    idObjeto= null,
}) =>{
    try{
	console.log(idObjeto)
	if(idObjeto || idObjeto===0){
	    const respuesta = await fetch(`${API_URL}/${Entidad}/${idObjeto}`,{method:"DELETE"});
	    const datos = await respuesta.json();
	    return datos
	}
    }catch(error){
	console.log(error);
    }
}//Eliminar Entidad

export const ObtenerUno = async({
    Entidad = "mascotas",
    idObjeto = null
}) =>{
    try {
	const respuesta = await fetch(`${API_URL}/${Entidad}/${idObjeto}`);
	const datos = await respuesta.json();
	return datos;
    }catch(error){
	console.error(error)
    }
}//ObtenerUno



export const CrearEntidad = async ({
    Entidad = "mascotas",
    objeto ={},
    method ="POST",
    idObjeto = null
})=>{
    try {
	let url = null;
	if(method === "PUT" && (idObjeto || idObjeto === 0)){    	
	    url = `${API_URL}/${Entidad}/${idObjeto}`;
	}else if(method === "POST"){    
	    url = `${API_URL}/${Entidad}`;
	}
	if(!url){
	    throw new Error("No Existe La Url");
	}
	const respuesta = await fetch(url , {
	    method,
	    headers: {
		'Content-Type':'application/json'
	    },
	    body: JSON.stringify(objeto)
	});
	const datos = await respuesta.json();
	return datos;

    }catch(e){
	console.error(e);
    }
}//Crear Entidad 
