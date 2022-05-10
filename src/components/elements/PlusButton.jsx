import React from 'react'




const openProductDetail = () => {
    // Agregar la funcionalidad para abrir el ProductDetail
}


const PlusButton = (props) => {
  return (
    <p className='frame__img-btn-plus' style={props.styles} onClick={openProductDetail} >+</p>
  )
}

export default PlusButton