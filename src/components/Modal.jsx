import React, { useContext } from "react";
import { LightDarkThemeContext } from "../contexts/LightDarkThemeContext";

const Modal = ({children,closeModal,isOpen}) => {
  const { darkMode } = useContext(LightDarkThemeContext)
  const handleModalContainerClick = e => e.stopPropagation();
  return(
    <article onClick={()=>closeModal(false)} className={darkMode?`modal-dark ${isOpen && "is-open"}`:`modal-light ${isOpen && "is-open"}`}>  
      <div className={darkMode?"modal-container-dark":"modal-container-light"} onClick={handleModalContainerClick}>
        <button onClick={()=>closeModal(false)} className={darkMode?"modal-close-dark":"modal-close-light"}>X</button>
        {children}
      </div>
    </article>
  )
}

export default Modal