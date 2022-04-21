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
    const [MostrarModal, CambiarModal] = useState(false);
    const [datos, setdatos] = useState([]);
    const [columna, setcolumna] = useState([]);
    const [alerta, setAlerta] = useState(null);
    const [error, setError] = useState(null);
    const [objeto, setObjeto] = useState([]);
    const [opciones , setOpciones] = useState([]);
    const [entidades , setEntidades] = useState([]);
    const [idObjeto , setidObjeto] = useState(null);
    const [method , Setmethod] = useState("POST")
    //Opciones Iniciales 
    const opcionesIniciales = {
        Raza: [{
                valor: "Perro",
                etiqueta: "Perro",
            },
            {
                valor: "Gato",
                etiqueta: "Gato",
            },
            {
                valor: "Pajaro",
                etiqueta: "Pajaro",
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
        ]
    };


    
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
	setAlerta("success");
	setError('Agregado Con Exito !');
	setTimeout(function(){
	    setError(null);
	}, 2000)
	ListarEntidades();

    }

    //Editar Entidades
    const EditarEntidades = async (_evento , index) => {
	
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

    
    console.log(idObjeto)

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
		>
		  {columna.map((nombre, index) => {
		      return(
			<ComponenteCampo 
			    key={index}
			    ManejarInput={ManejarInput}
			    objeto={datos[0]}
			    NombreCampo ={nombre}
			    opciones = {opcionesIniciales}	
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
