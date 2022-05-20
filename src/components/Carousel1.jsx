import React from 'react'
import { Slideshow } from './Slideshow';
import products from '../products/products';
import Image from './Image';
import styles from '../index.css'
const Carousel1 = ({title}) => {
  return (
    <div style={{"marginTop":"71px","position":"relative"}}>
      <video id="background-video" autoPlay muted loop playsInline>
        <source src={require("../source/videos/background-video.mp4")} type="video/mp4"></source>
      </video>
      <h1 className='title-Carousel'>{title}</h1>
      {/* El Slideshow acepta parametros:
        Controles:activa o desactiva controoles
        tiempoIntervalo: tiempo hasta que el carrusel pasa a otro slide
        autoplay: el carrusel se mueve solo
      velocidad: velocidad de movimiento*/}
      <Slideshow controles={true} tiempoIntervalo={5000} autoplay={false} velocidad={300}>
        <div className='slide'>
          <div className='carousel-imgContainer'>
            <Image product={products.product2} percentage={100}/>
          </div>
          <div className='carousel-imgContainer'>
            <Image product={products.product3} percentage={100}/>
          </div>
        </div>
        <div className='slide'>
          <div className='carousel-imgContainer'>
            <Image product={products.product4} percentage={100}/>
          </div>
          <div className='carousel-imgContainer'>
            <Image product={products.product5} percentage={100}/>
          </div>
        </div>
        <div className='slide'>
          <div className='carousel-imgContainer'>
            <Image product={products.product6} percentage={100}/>
          </div>
          <div className='carousel-imgContainer'>
          </div>
        </div>
      </Slideshow>
    </div>
  )
};

export default Carousel1