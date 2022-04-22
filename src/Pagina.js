import {
    useState,
    useEffect
} from "react";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import Tabla from "./componentes/Tabla";
import Modal from "./componentes/Modal";
import {
    ListarEntidad,
    EliminarEntidad,
    CrearEntidad,
    ObtenerUno,
} from "./Servicios.js";
import ComponenteCampo from "./componentes/ComponenteCampo";


function Pagina({
    Titulo,
    Entidad
}) {
        //Opciones Iniciales 
    const opcionesIniciales = {
        Raza: [{
                valor: "Poodle",
                etiqueta: "Poodle",
            },
            {
                valor: "Pekingese",
                etiqueta: "Pekingese",
            },
            {
                valor: "Shiba Inu",
                etiqueta: "Shiba Inu",
            },
            {
                valor: "Otro",
                etiqueta: "Otro",
            },
        ],
        diagnostico: [{
                valor: "Prurito de piel (sarna)",
                etiqueta: "Prurito de piel (sarna)",
            },
            {
                valor: "Moquillo",
                etiqueta: "Moquillo",
            },
            {
                valor: "Trauma cefalico",
                etiqueta: "Trauma cefalico",
            },
            {
                valor: "Parvovirosis",
                etiqueta: "Parvovirosis",
            },
	] , 
	    mascota: [],
	    veterinaria: [],
	    dueno: [],
    };


    const [MostrarModal, CambiarModal] = useState(false);
    const [datos, setdatos] = useState([]);
    const [columna, setcolumna] = useState([]);
    const [alerta, setAlerta] = useState(null);
    const [error, setError] = useState(null);
    const [objeto, setObjeto] = useState([]);
    const [opciones , setOpciones] = useState(opcionesIniciales);
    const [entidades , setEntidades] = useState([]);
    const [idObjeto , setidObjeto] = useState(null);
    const [method , Setmethod] = useState("POST");
    const [btnEditar , setBtnEditar] = useState(false);

    
    //ManejaInput
    const ManejarInput = (evento) => {
	 const { target: {value, name} } = evento;
	 setObjeto({ ...objeto , [name]: value})
    }
    //ListarEntidades
    const ListarEntidades = async () => {
        const resp = await ListarEntidad({
            Entidad
        })
        setdatos([resp])
        setcolumna(Object.keys(resp[0]));
    }
    //CrearEntidad
    const CrearEntidades = async () =>{

	await CrearEntidad({Entidad ,objeto , method , idObjeto});
	CambiarModal(false);
	if(method === "POST"){
	    setAlerta("success");
	    setError('Agregado Con Exito !');
	    setTimeout(function(){
		setError(null);
	    }, 2000)
	}else if(method=="PUT"){
	    setAlerta('primary');
	    setError('Editado Con Exito !');
	    setTimeout(function() {
		setError(null);
	    }, 2000)
	}
	ListarEntidades();
	Setmethod("POST")
	setBtnEditar(false)
	setObjeto([])
	
    }
    //Cargar Opciones 
    const CargarOpciones  = async () => {
	const MascotasPromise = ListarEntidad( {
	    Entidad: "mascotas"
	} )

	const VeterinariaPromise = ListarEntidad( {
	    Entidad: "veterinaria"
	} )

	const DuenosPromise = ListarEntidad( {
	    Entidad: "duenos"
	} )

	let [mascota , veterinaria , dueno] = await Promise.all([
	    MascotasPromise,
	    VeterinariaPromise,
	    DuenosPromise
	])

	mascota = mascota.map((_mascota , index) => ({
	    valor: index.toString(),
	    etiqueta : `${_mascota.Nombre} (${_mascota.Raza})`
	}))

	veterinaria = veterinaria.map((_veterinaria , index) => ({
	    valor: index.toString(),
	    etiqueta: `${_veterinaria.Nombre} (${_veterinaria.Apellido})`,
	}))

	dueno = dueno.map((_dueno , index ) => ({
	    valor: index.toString(),
	    etiqueta: `${_dueno.Nombre} (${_dueno.Dni})`
	}))
	
	const NuevasOpciones = { ...opciones , mascota ,veterinaria , dueno }

	setOpciones(NuevasOpciones);

	console.log(objeto);

    }



    //Editar Entidades
    const EditarEntidades = async (_evento , index) => {

	setBtnEditar(true);
	
	let ObtenerEntidad = await ObtenerUno ({
	    Entidad,
	    idObjeto:index, 
	})

	const MascotasPromise = ListarEntidad( {
	    Entidad: "mascotas"
	} )

	const VeterinariaPromise = ListarEntidad( {
	    Entidad: "veterinaria"
	} )

	const DuenosPromise = ListarEntidad( {
	    Entidad: "duenos"
	} )

	let [mascota , veterinaria , dueno] = await Promise.all([
	    MascotasPromise,
	    VeterinariaPromise,
	    DuenosPromise
	])

	mascota = mascota.map((_mascota , index) => ({
	    valor: index.toString(),
	    etiqueta : `${_mascota.Nombre} (${_mascota.Raza})`
	}))

	veterinaria = veterinaria.map((_veterinaria , index) => ({
	    valor: index.toString(),
	    etiqueta: `${_veterinaria.Nombre} (${_veterinaria.Apellido})`,
	}))

	dueno = dueno.map((_dueno , index ) => ({
	    valor: index.toString(),
	    etiqueta: `${_dueno.Nombre} (${_dueno.Dni})`
	}))
	
	const NuevasOpciones = { ...opciones , mascota ,veterinaria , dueno }
	setObjeto(ObtenerEntidad)
	setOpciones(NuevasOpciones)
	CambiarModal(true);
	Setmethod("PUT");
	setidObjeto(index);
    }
    console.log(opciones)


    //EliminarEntidades
    const EliminarEntidades = async (e, index) => {
        const respuesta = await EliminarEntidad({
            Entidad,
            idObjeto: index
        });
        setAlerta('danger');
        setError('Eliminado Con Exito !');
        setTimeout(function() {
            setError(null);
        }, 2000)
        ListarEntidades()
    }
    //UseEffect
    useEffect(() => {
        ListarEntidades();
    }, [Entidad])

    useEffect( () => {
	CargarOpciones();
    }, [] ) 

    //return 
    return (
        <div className="container">
        {
	    error != null ? (
	    <div className={`alert alert-${alerta}`} role="alert">
		{error}
	    </div>)
          :(
            <div></div>
          )
        }
      <Nav Titulo={Titulo} />
      <Tabla
        MostrarModal={MostrarModal}
        CambiarModal={CambiarModal}
        columna={columna}
	datos={datos}
	EliminarEntidades ={EliminarEntidades}
	EditarEntidades = {EditarEntidades}
      />
	  {MostrarModal && (
	      <Modal CambiarModal={CambiarModal} 
		     Titulo ={Titulo}  
		     ManejarInput={ManejarInput}
		     CrearEntidades = {CrearEntidades}
		     Objeto = {objeto}
		     btnEditar = {btnEditar}
		     setBtnEditar = {setBtnEditar}
		     setObjeto = {setObjeto}

		>
		  {columna.map((nombre, index) => {
		      return(
			<ComponenteCampo 
			    key={index}
			    ManejarInput={ManejarInput}
			    objeto={objeto}
			    NombreCampo ={nombre}
			    opciones = {opciones}	
			  />
		      )
		  })} 
	      </Modal>
	      )}
      <Footer />
    </div>
    )
}

export default Pagina;
