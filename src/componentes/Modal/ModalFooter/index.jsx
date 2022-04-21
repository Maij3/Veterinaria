function ModalFooter ({cambiarModal = ()=> {} , CrearEntidades =() =>{}}){
    return (
	<div className="modal-footer">
            <button 
	      type="button"
	      onClick={CrearEntidades}
              className="btn btn-primary">
                Crear
            </button>
	</div>
    );
}

export default ModalFooter;
