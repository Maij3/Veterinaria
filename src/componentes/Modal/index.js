import "./Modal.css";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";



function Modal ({
  CambiarModal = () =>{}
}) {
  const cambiarModal = () =>{
    CambiarModal(false)
  }

  return (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button 
              type="button" 
              className="close" 
              data-dismiss="modal" 
              aria-label="Close"
              onClick = {cambiarModal}
          >
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-primary">
                Save changes
            </button>
            <button 
              type="button" 
              className="btn btn-secondary" 
              data-dismiss="modal">Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
