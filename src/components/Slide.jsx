import React from "react";
import SlideMain from "./SlideMain";
import SlideProductDetail from "./SlideProductDetail";


const Slide = ({productsInSlide,typeSlide=false}) => {
  return(
    <>
      {typeSlide===true
      ?<SlideProductDetail productsInSlide={productsInSlide}/>
      :<SlideMain productsInSlide={productsInSlide}/>
      }
    </>
  )
}

export default Slide