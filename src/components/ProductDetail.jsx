import React, {useContext } from 'react';
import Carousel3 from './Carousel3'
import { OpenModalContext } from '../contexts/OpenModalContext';

const ProductDetail = () => {

  const {isOpen,setIsOpen,openModal,closeModal,productClicked,handleClickProduct} = useContext(OpenModalContext)

  const changeProduct = (newProductToShow) => handleClickProduct(newProductToShow)

  return(
      <div className='itemView-Container'>
        <div className='itemView-imgContainer'>
          <img src={require(`../source/images/products/${productClicked.image}`)} style={{"maxWidth":"100%"}} alt="img" />
        </div>
          <div className='itemView-descriptionContainer'>
            <h3 className='itemView-title'>{productClicked.text}</h3>
            <div className='itemView-textContainer'><p className='itemView-text'>{productClicked.text}</p></div>
          </div>
          <div className='itemView-carouselContainer'>
            <Carousel3 changeProduct={changeProduct}/>
          </div>
        </div>
  )
}

export default ProductDetail