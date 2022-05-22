import React , { useContext } from 'react'
import { OpenModalContext } from '../../contexts/OpenModalContext'
import products from '../../products/products'



const PlusButton = (props) => {
  const {isOpen,setIsOpen,openModal,closeModal,productClicked,handleClickProduct} = useContext(OpenModalContext)
  
  return (
    <p className='frame__img-btn-plus' style={props.styles} onClick={()=>handleClickProduct(props.product)} >+</p>
  )
}

export default PlusButton