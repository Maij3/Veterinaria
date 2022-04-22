import "./Modal.css";


import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
function Modal({
    CambiarModal = () => {},
    CrearEntidades =() =>{},
    Objeto,
    Titulo,
    children =[],
    btnEditar ,
    setBtnEditar,
    setObjeto,
}) {
    const cambiarModal = () => {
	CambiarModal(false)
	setBtnEditar(false);
	setObjeto([]);
    }


    return (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
	    <ModalHeader cambiarModal={cambiarModal} Titulo={Titulo} />
          <div className="modal-body">
	      {children}
          </div>
	  <ModalFooter CrearEntidades = {CrearEntidades} Objeto= {Objeto} btnEditar={btnEditar} />
        </div>
      </div>
    </div>
    )
}

export default Modal;
