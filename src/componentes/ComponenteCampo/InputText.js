import React from "react";
function InputText({
    tipo = "text",
    value,
    NombreCampo,
    onInput = () => {}
}) {
    


    return (
        <div className="form-row">
            <div className="col">
                <input 
                    type={tipo}
                    className="form-control" 
                    name={NombreCampo} 
                    id={NombreCampo} 
                    placeholder={NombreCampo} 
		    onInput = {onInput}
	    	    value = {value}
                    />
            </div>
        </div>
    )
}

export default InputText;
