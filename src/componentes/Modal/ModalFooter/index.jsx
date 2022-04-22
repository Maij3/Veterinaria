function ModalFooter ({cambiarModal = ()=> {} , CrearEntidades =() =>{} , btnEditar}){
    return (
	<div className="modal-footer">
            <button 
	      type="button"
	      onClick={CrearEntidades}
	      className="btn btn-primary">
	      { btnEditar ? 'Editar' : 'Crear' }
            </button>
	</div>
    );
}

export default ModalFooter;
