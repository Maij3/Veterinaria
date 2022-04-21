import Input from "../ComponenteCampo/InputText";
import Select from "../ComponenteCampo/SelectText";



function ComponenteCampo({
    ManejarInput = () => {},
    objeto = {},
    NombreCampo = "",
    opciones = {},
    Value
}) {
    
    
    switch (NombreCampo) {
        case "Nombre":
        case "Peso":
        case "Edad":
        case "Apellido":
        case "Dni":
        case "fechaCreacion":
        case "fechaEdicion":
        case "descripcion":
        case "diagnostico":
            return (
                <Input
			tipo="text"
			onInput = { ManejarInput }
			NombreCampo={NombreCampo}
			placeholder = {NombreCampo}
			/>
            );
        case "dueno":
        case "Raza":
        case "mascota":
        case "veterinaria":
            return (
                <div className="container">
		{Object.keys(opciones).length > 0 ? (
		<Select
			NombreCampo = {NombreCampo}
			opciones = {opciones[NombreCampo]}
			onChange = {ManejarInput}
			placeholder = "Tipo Animal"
			defaultValue={objeto[NombreCampo]}    
			selectedValue={objeto[NombreCampo]}
			value={objeto[NombreCampo]}
			/>
		    ) 
		    	: ("Cargar opciones"
			
			)}
		   </div>
            );
        default:
            return false;
    }
}

export default ComponenteCampo;
