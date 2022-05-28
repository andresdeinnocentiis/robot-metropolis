import React, { useEffect, useState  } from 'react'
import { isMobile } from '../functions/isMobile';
import { Slideshow2 } from './Slideshow2';
import products from '../products/products';
import Slide from './Slide';
const CarouselDetail = () => {

  const [slideContent, setSlideContent] = useState([])
  useEffect(()=>{
    countSlides()
  },[products])
  
  function countSlides (){
    const ArrayProducts = Object.values(products);
    const slides = []
    let i= 0
    let flag = false;
    do {
      slides.push(ArrayProducts.slice(i,(i+3)))
      i = i + 3
      if((i+3)>=ArrayProducts.length)
        flag = true
    } while (flag!==true);
    let leftProducts = ArrayProducts.length % slides.length
    slides.push(ArrayProducts.slice(ArrayProducts.length-leftProducts,ArrayProducts.length))
    setSlideContent(slides)
  }

  return (
    <div>
      {/* El Slideshow es el controlador general, acepta parametros:
        autoplay: el carrusel se mueve solo
        tiempoIntervalo: tiempo hasta que el carrusel pasa a otro slide(si autoplay esta activado)
        velocidad: velocidad de movimiento*/}
      <Slideshow2 tiempoIntervalo={5000} autoplay={false} velocidad={300}>
        {slideContent.map((element)=><Slide productsInSlide={element} typeSlide={true}/> )}
      </Slideshow2>
    </div>
  )
};

export default CarouselDetail