import React,{useState} from 'react'
import { Slideshow } from './Slideshow';
import products from '../products/products';
import Slide from './Slide';
import useWindowSize from "../functions/UseWindowSize";

const CarouselLab = ({title}) => {
  const [slideActivated,setSlideActivated] = useState(1)
  const width = useWindowSize()
  let maxSlidesLab = ()=>{
    if(width>900)
      return 5
    else
      return 10
  } 

  function handleSelectedIndicator(value){
    if(value===-1){
      if(slideActivated===1)
        setSlideActivated(maxSlidesLab())
      else
        setSlideActivated(slideActivated-1)
    }
    if(value===1){
      if(slideActivated===maxSlidesLab())
        setSlideActivated(1)
      else
        setSlideActivated(slideActivated+1)
    }
  }
  return (
    <div id='lab' style={{"marginTop":"50px"}}>
      <h1 className='title-Carousel'>{title}</h1>
      {/* El Slideshow acepta parametros:
        tiempoIntervalo: tiempo hasta que el carrusel pasa a otro slide
        autoplay: el carrusel se mueve solo
        velocidad: velocidad de movimiento*/}
      <Slideshow tiempoIntervalo={5000} autoplay={false} velocidad={300} cantSlides={maxSlidesLab()} selectedIndicator={slideActivated} handleSelectedIndicator={handleSelectedIndicator}>
        <Slide productsInSlide={[products.product7,products.product8]}/>
        <Slide productsInSlide={[products.product9,products.product10]}/>
        <Slide productsInSlide={[products.product11,products.product12]}/>
        <Slide productsInSlide={[products.product13,products.product14]}/>
        <Slide productsInSlide={[products.product15,products.product16]}/>
      </Slideshow>
    </div>
  )
};

export default CarouselLab