import React from 'react'
import { Slideshow } from './Slideshow';
import products from '../products/products';
import Image from './Image';
import styles from '../index.css'
const Carousel2 = ({title}) => {
  return (
    <div style={{"marginTop":"71px"}}>
      <h1 className='title-Carousel'>{title}</h1>
      {/* El Slideshow acepta parametros:
        Controles:activa o desactiva controoles
        tiempoIntervalo: tiempo hasta que el carrusel pasa a otro slide
        autoplay: el carrusel se mueve solo
      velocidad: velocidad de movimiento*/}
      <Slideshow controles={true} tiempoIntervalo={5000} autoplay={false} velocidad={300}>
        <div className='slide'>
          <div className='carousel-imgContainer'>
            <Image product={products.product7} percentage={100}/>
          </div>
          <div className='carousel-imgContainer'>
            <Image product={products.product8} percentage={100}/>
          </div>
        </div>
        <div className='slide'>
          <div className='carousel-imgContainer'>
            <Image product={products.product9} percentage={100}/>
          </div>
          <div className='carousel-imgContainer'>
            <Image product={products.product10} percentage={100}/>
          </div>
        </div>
        <div className='slide'>
          <div className='carousel-imgContainer'>
            <Image product={products.product11} percentage={100}/>
          </div>
          <div className='carousel-imgContainer'>
           <Image product={products.product12} percentage={100}/>
          </div>
        </div>
        <div className='slide'>
          <div className='carousel-imgContainer'>
            <Image product={products.product13} percentage={100}/>
          </div>
          <div className='carousel-imgContainer'>
           <Image product={products.product14} percentage={100}/>
          </div>
        </div>
        <div className='slide'>
          <div className='carousel-imgContainer'>
            <Image product={products.product15} percentage={100}/>
          </div>
          <div className='carousel-imgContainer'>
           <Image product={products.product16} percentage={100}/>
          </div>
        </div>
      </Slideshow>
    </div>
  )
};

export default Carousel2