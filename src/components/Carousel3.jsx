import React from 'react'
import { isMobile } from '../functions/isMobile';
import { Slideshow2 } from './Slideshow2';
import products from '../products/products';
import Image from './Image';
import styles from '../index.css'
import { useState } from 'react';
const Carousel3 = (changeProduct) => {

  const [mobile, setMobile] = useState(isMobile())

  let ArrayProducts = Object.values(products);

  return (
    <div>
      {/* El Slideshow acepta parametros:
        Controles:activa o desactiva controoles
        tiempoIntervalo: tiempo hasta que el carrusel pasa a otro slide
        autoplay: el carrusel se mueve solo
      velocidad: velocidad de movimiento*/}
      <Slideshow2 controles={true} tiempoIntervalo={5000} autoplay={false} velocidad={300}>
        <div className='slide__itemView'>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[0])} src={require(`../source/images/products/${ArrayProducts[0].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[1])} src={require(`../source/images/products/${ArrayProducts[1].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[2])} src={require(`../source/images/products/${ArrayProducts[2].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
        </div>
        <div className='slide__itemView'>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[3])} src={require(`../source/images/products/${ArrayProducts[3].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[4])} src={require(`../source/images/products/${ArrayProducts[4].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[5])} src={require(`../source/images/products/${ArrayProducts[5].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
        </div>
        <div className='slide__itemView'>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[6])} src={require(`../source/images/products/${ArrayProducts[6].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[7])} src={require(`../source/images/products/${ArrayProducts[7].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[8])} src={require(`../source/images/products/${ArrayProducts[8].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
        </div>
        <div className='slide__itemView'>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[9])} src={require(`../source/images/products/${ArrayProducts[9].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[10])} src={require(`../source/images/products/${ArrayProducts[10].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[11])} src={require(`../source/images/products/${ArrayProducts[11].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
        </div>
        <div className='slide__itemView'>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[12])} src={require(`../source/images/products/${ArrayProducts[12].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[13])} src={require(`../source/images/products/${ArrayProducts[13].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[14])} src={require(`../source/images/products/${ArrayProducts[14].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
        </div>
        <div className='slide__itemView'>
          <div className='carousel-imgContainer__itemView'>
            <img onClick={()=>changeProduct.changeProduct(ArrayProducts[15])} src={require(`../source/images/products/${ArrayProducts[15].image}`)} style={{"maxWidth":"90%","cursor":"pointer"}} alt="img" />
          </div>
          <div className='carousel-imgContainer__itemView'>
          </div>
          <div className='carousel-imgContainer__itemView'>
          </div>
        </div>
      </Slideshow2>
    </div>
  )
};

export default Carousel3