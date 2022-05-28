import React, {useContext } from 'react';
import CarouselDetail from './CarouselDetail';
import { OpenModalContext } from '../contexts/OpenModalContext';
import { LightDarkThemeContext } from '../contexts/LightDarkThemeContext';

const ProductDetail = () => {
  const { darkMode } = useContext(LightDarkThemeContext)
  const {isOpen,setIsOpen,openModal,closeModal,productClicked,handleClickProduct} = useContext(OpenModalContext)

  return(
      <div className='itemView-Container'>
        <div className='itemView-imgContainer'>
          <img src={require(`../source/images/products/${productClicked.image}`)} style={{"width":"100%","objectFit":"cover"}} alt="img" />
        </div>
          <div  className='itemView-descriptionContainer'>
            <p className='itemView-title'>{productClicked.text}</p>
            <div className={darkMode?'itemView-textContainer-dark':'itemView-textContainer-light'}><p className='itemView-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem est repellat beatae facere odit autem rerum minus, aliquam provident laboriosam unde minima nostrum pariatur nisi quaerat, earum suscipit neque necessitatibus?
            Aperiam, culpa atque sit reprehenderit error alias placeat dolorem voluptatibus tempora omnis. Voluptatem molestiae quam repudiandae hic? Fugiat reprehenderit corrupti inventore labore sit dolore atque quasi? Autem vero ipsam voluptas.
            Aspernatur minima nostrum debitis vitae quidem repudiandae temporibus id distinctio neque quod odio eveniet deserunt nisi optio quasi sed, quo ducimus hic consequuntur commodi non modi. Assumenda iure esse soluta.
            Quos earum, provident deserunt neque sequi sed unde eaque maxime assumenda ex adipisci corporis aperiam dolorem alias, vero officia voluptatem pariatur optio suscipit rem quis, saepe consequatur tempore? Suscipit, consectetur.
            Esse asperiores temporibus repellat quibusdam quam nisi voluptates nemo nobis cum? Possimus, temporibus. Esse eligendi enim necessitatibus eos asperiores non amet, assumenda soluta alias cumque pariatur est quasi qui in.
            Quia praesentium eius velit natus porro dicta voluptate aperiam libero earum tempora necessitatibus culpa eos minus impedit aspernatur eaque fugiat reiciendis id consequatur fugit, sunt totam maiores accusamus. Quidem, eligendi.
            Repellendus, iste vero, deleniti doloremque vitae quisquam aut soluta ratione similique non odit ducimus tenetur omnis in hic. Eaque impedit quam expedita. Labore minus est voluptates et nobis perferendis quasi!
            Vel pariatur exercitationem quasi, quam culpa accusantium sequi iure iusto aspernatur minus perferendis, deleniti laboriosam eos praesentium, soluta nostrum beatae corrupti quas possimus aliquid laborum cum! Voluptas cupiditate atque reprehenderit?
            A consectetur, minus cum error perspiciatis iusto et deserunt quam quibusdam dolorum ipsa aliquid, veritatis ducimus voluptatem doloremque nostrum omnis reprehenderit rerum. Perferendis earum ipsa assumenda corporis sapiente vel excepturi.
            Magni facere error corrupti magnam maxime debitis est laborum, omnis totam. Magnam, nisi sed dolorum deserunt modi nam fugiat. Autem assumenda sunt modi dolor ratione facere laborum eos iste laboriosam.</p></div>
          </div>
          <div className='itemView-carouselContainer'>
            <CarouselDetail/>
          </div>
        </div>
  )
}

export default ProductDetail