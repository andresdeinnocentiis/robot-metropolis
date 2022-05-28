import React,{useContext,useEffect,useState} from 'react'
import { Slideshow } from './Slideshow';
import products from '../products/products';
import Slide from './Slide';
import { LightDarkThemeContext } from '../contexts/LightDarkThemeContext';
import useWindowSize from "../functions/UseWindowSize";

const CarouselProjects = ({title}) => {
  
  const [slideActivated,setSlideActivated] = useState(1)
  const width = useWindowSize()
  let maxSlides = ()=>{
    if(width>900)
      return 3
    else
      return 5
  } 

  function handleSelectedIndicator(value){
    if(value===-1){
      if(slideActivated===1)
        setSlideActivated(maxSlides())
      else
        setSlideActivated(slideActivated-1)
    }
    if(value===1){
      if(slideActivated===maxSlides())
        setSlideActivated(1)
      else
        setSlideActivated(slideActivated+1)
    }
  }

  const { darkMode } = useContext(LightDarkThemeContext)
  return (
    <div style={{"marginTop":"71px","position":"relative"}}>
      <video className={darkMode?'backgroundVideoProjectsDark':'backgroundVideoProjectsLight'} autoPlay muted loop playsInline>
        <source src={require("../source/videos/background-video.mp4")} type="video/mp4"></source>
      </video>
      <h1 className='title-Carousel'>{title}</h1>
      {/* El Slideshow acepta parametros:
        tiempoIntervalo: tiempo hasta que el carrusel pasa a otro slide
        autoplay: el carrusel se mueve solo
        velocidad: velocidad de movimiento*/}
      <Slideshow tiempoIntervalo={5000} autoplay={false} velocidad={300} cantSlides={maxSlides()} selectedIndicator={slideActivated} handleSelectedIndicator={handleSelectedIndicator}>
        <Slide productsInSlide={[products.product2,products.product3]}/>
        <Slide productsInSlide={[products.product4,products.product5]}/>
        <Slide productsInSlide={[products.product6]}/>
      </Slideshow>
    </div>
  )
};

export default CarouselProjects