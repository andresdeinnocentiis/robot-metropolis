import React,{useContext, useState} from 'react'
import {ReactComponent as LeftArrow} from '../source/images/iconmonstr-arrow-left-lined.svg'
import {ReactComponent as RightArrow} from '../source/images/iconmonstr-arrow-right-lined.svg'
import { useRef, useEffect,useCallback } from 'react'
import useWindowSize from "../functions/UseWindowSize";
import { LightDarkThemeContext } from '../contexts/LightDarkThemeContext';



const Slideshow = ({
  children,
  cantSlides, 
  tiempoIntervalo= 5000, 
  autoplay = true, 
  velocidad = 300,
  selectedIndicator,
  handleSelectedIndicator
  }) => {

  
  const width = useWindowSize()
  const { darkMode } = useContext(LightDarkThemeContext)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const slideShow = useRef(null)
  const slideIndicator = Array.from({length: cantSlides}, (_, i) => i + 1)

  const waitButton = () => {
    if(buttonDisabled===false)
      setButtonDisabled(true)
    setTimeout(()=>{
      setButtonDisabled(false)
    },400)
  }

  const slideRight = useCallback (()=>{
    //Compruebo que el slideshow tenga elementos
    if(slideShow.current.children.length > 0){
      //Capturo el primer elemento
      const primerElemento = slideShow.current.children[0];
      //Agrego una transición
      slideShow.current.style.transition = `${velocidad}ms ease-out all`;
  
      //Capturo el tamaño de ancho del slideShow
      const tamañoSlide =  slideShow.current.children[0].offsetWidth;
      //Mover el slideshow
      slideShow.current.style.transform = `translateX(${-tamañoSlide}px)`
  
      const transicion = () => {
        //Reinicio la posición
        slideShow.current.style.transition = `none`;
        slideShow.current.style.transform = `translateX(0)`;
        //Muevo el primer elemento del slideshow hacia el final
        slideShow.current.appendChild(primerElemento);
        slideShow.current.removeEventListener('transitionend',transicion);
      }
      slideShow.current.addEventListener('transitionend',transicion);
    }
  },[velocidad]);

  const slideLeft = () => {
    if(slideShow.current.children.length>0){
      //Obtener ultimo elemento
      const index = slideShow.current.children.length -1;
      const ultimoElement = slideShow.current.children[index]
      slideShow.current.insertBefore(ultimoElement,slideShow.current.firstChild)

      //Agrego una transición
      slideShow.current.style.transition = `none`;

      //Capturo el tamaño de ancho del slideShow
      const tamañoSlide =  slideShow.current.children[0].offsetWidth;
      //Mover el slideshow
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(()=>{
        slideShow.current.style.transition = `${velocidad}ms ease-out all`;
        slideShow.current.style.transform = `translateX(0)`
      },50)
    }
  }

  useEffect(()=>{
    if(autoplay){
      let intervalo = setInterval(()=>{
        slideRight();
      },tiempoIntervalo);
  
      //Eliminar intervalos
  
      slideShow.current.addEventListener('mouseenter',()=>{
        clearInterval(intervalo);
      });
  
      slideShow.current.addEventListener('mouseleave',()=>{
        intervalo = setInterval(()=>{
          slideRight();
        },tiempoIntervalo);
      });
      
    }
    //Agrega intervalos
  },[autoplay,tiempoIntervalo,slideRight]);

  return(
    <div className='slideshow-container'>
      <div className='slideContainer' style={width<900?{"maxHeight":`${width}px`}:{"height":"100%"}} ref={slideShow}>
        {children}
      </div>
      <div className='slideIndicatorContainer'>
        <ol className='slideIndicatorList'>
          {slideIndicator.map(number=>
          <li><div className={darkMode
          ?selectedIndicator===number?"slideIndicator slideIndicatorDarkActivated":"slideIndicator"
          :selectedIndicator===number?"slideIndicator slideIndicatorLightActivated":"slideIndicator"}></div></li>)}
        </ol>
      </div>
      <div className='slideControls'>
        <button className={darkMode?'slideBotonDark slideBotonLeft':'slideBotonLight slideBotonLeft'} onClick={()=>{waitButton();slideLeft();handleSelectedIndicator(-1)}} disabled={buttonDisabled}>
          <LeftArrow className={darkMode?'arrowLeftDark':'arrowLeftLight'} />
        </button>
        <button className={darkMode?'slideBotonDark slideBotonRight':'slideBotonLight slideBotonRight'} onClick={()=>{waitButton();slideRight();handleSelectedIndicator(1)}} disabled={buttonDisabled} >
          <RightArrow className={darkMode?'arrowRightDark':'arrowRightLight'} />
        </button>
      </div>
    </div>
  )
}

export {Slideshow}
