function SelectText({
    opciones = [],
    NombreCampo = "",
    value = "",
    onChange = () => {}
}) {
    return (

        <select 	
	    	className="form-select" 
	    	aria-label="Default select example" 
	    	onChange = {onChange}
	    	name = {NombreCampo}
	    	defaultValue={value}
	    >
          <option value="">
	    Seleccione {NombreCampo}
	  </option>
          {opciones.map((
		  { valor , etiqueta }, index) => (
          		<option 
		  		key={`${index}`} 
		  		value={valor}>{etiqueta}
		 	</option>
	  ) 
          )}
	</select>
    )
}

export default SelectText;
