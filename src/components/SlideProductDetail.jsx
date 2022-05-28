import React,{useContext} from "react";
import { OpenModalContext } from '../contexts/OpenModalContext';


const SlideProductDetail = ({productsInSlide}) => {
  const {isOpen,setIsOpen,openModal,closeModal,productClicked,handleClickProduct} = useContext(OpenModalContext)
  return(
    <>
      <div className='slide__itemView'>
        <div className='carousel-imgContainer__itemView'>
          {typeof(productsInSlide[0])!=="undefined"
          ?<img onClick={()=>handleClickProduct(productsInSlide[0])} 
          src={require(`../source/images/products/${productsInSlide[0].image}`)} 
          style={{"maxWidth":"90%","cursor":"pointer","objectFit":"cover"}} alt="img" />
          :<div></div>
          }
        </div>
        <div className='carousel-imgContainer__itemView'>
        {typeof(productsInSlide[1])!=="undefined"
          ?<img onClick={()=>handleClickProduct(productsInSlide[1])} 
          src={require(`../source/images/products/${productsInSlide[1].image}`)} 
          style={{"maxWidth":"90%","cursor":"pointer","objectFit":"cover"}} alt="img" />
          :<div></div>
          }
          </div>
        <div className='carousel-imgContainer__itemView'>
        {typeof(productsInSlide[2])!=="undefined"
          ?<img onClick={()=>handleClickProduct(productsInSlide[2])} 
          src={require(`../source/images/products/${productsInSlide[2].image}`)} 
          style={{"maxWidth":"90%","cursor":"pointer","objectFit":"cover"}} alt="img" />
          :<div></div>
          }
        </div>
      </div>
    </>
  )
}

export default SlideProductDetail