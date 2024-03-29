import React, {useState} from 'react'
import './Modal.css'

function Modal() {

const [modal, setModal ] = useState(false);

const toggleModal = () => {
    setModal(!modal)
}


  return (
    <>
    <button 
    onClick={toggleModal}
    className="btn-modal">Open
    </button>

{modal &&

    <div className="overlay">
        <div className="modal">
            <div className="modal-content">
                <h2>Hello Modale</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ex tempora vitae accusamus dolore animi temporibus qui error provident blanditiis?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ex tempora vitae accusamus dolore animi temporibus qui error provident blanditiis?
                    </p>
                    <button onClick={toggleModal}
className="close-modal">Close</button>
            </div>
        </div>
    </div>
 
 }  
</>

  )
}

export default Modal