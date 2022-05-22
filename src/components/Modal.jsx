import React from "react";

const Modal = ({children,closeModal,isOpen}) => {
  const handleModalContainerClick = e => e.stopPropagation();
  return(
    <article onClick={()=>closeModal(false)} className={`modal ${isOpen && "is-open"}`}>  
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button onClick={()=>closeModal(false)} className="modal-close">X</button>
        {children}
      </div>
    </article>
  )
}

export default Modal