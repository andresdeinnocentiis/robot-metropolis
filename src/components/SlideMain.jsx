import React from "react";
import Image from "./Image";
import useWindowSize from "../functions/UseWindowSize";


const SlideMain = ({productsInSlide}) => {
  const width = useWindowSize()
  return(
    <>
    {width>900
    ?
      <div className='slide'>
        <div className='carousel-imgContainer'>
          {typeof(productsInSlide[0])!=="undefined"
          ?<Image product={productsInSlide[0]} percentage={100}/>
          :<div></div>}
        </div>
        <div className='carousel-imgContainer'>
          {typeof(productsInSlide[1])!=="undefined"
          ?<Image product={productsInSlide[1]} percentage={100}/>
          :<div></div>}
        </div>
      </div>
    :
      <>
        <div className='slide'>
          <div className='carousel-imgContainer-mobile'>
            {typeof(productsInSlide[0])!=="undefined"
            ?<Image product={productsInSlide[0]} percentage={100}/>
            :<div></div>}
          </div>
        </div>
        {typeof(productsInSlide[1])!=="undefined"
        ?
          <div className='slide'>
            <div className='carousel-imgContainer-mobiler'>
              {typeof(productsInSlide[1])!=="undefined"
              ?<Image product={productsInSlide[1]} percentage={100}/>
              :null}
            </div>
          </div>
        :
          null
        }
      </>
      }
    </>
  )
}

export default SlideMain