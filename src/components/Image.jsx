import React, { useState } from 'react'
import { isMobile } from "../functions/isMobile";
import AnimaticLogo from "../components/animaticLogo";
import iBtn from '../source/images/ibtn.svg'
import xBtn from '../source/images/x.png'




const Image = ({product}) => {
    const [mobile, setMobile] = useState(isMobile())
    const [onMouseOver, setOnMouseOver] = useState(false)
    const [opacity, setOpacity] = useState('0')
    const [btnImage, setBtnImage] = useState(iBtn)
    const [clicked, setClicked] = useState(false)


    let styles = {
        frame: {
            width:'100%',
            height:'100%',
            opacity: opacity,  
            transition: 'all .1s linear',
        },
        text: {
            transition: 'all .2s linear',
        },
        mobileClickedImg: {
            
        }
    }

    window.addEventListener("resize", () => {
        if(window.innerWidth > 500) {
            setMobile(false)
        } else {
            setMobile(true)
        }
    })

    const handleMouseOver = () => {
        if(!mobile){
            setOpacity(prev => '1')
            setOnMouseOver(true)
        }
    }

    const handleMouseLeave = () => {
        if(!mobile){
            setOpacity('0')
            setOnMouseOver(false)
        }
    }

    const handleBtnClick = () => {
        if(!clicked) {
            setBtnImage(xBtn)
            setOpacity(prev => '1')
            setClicked(true)
        } else {
            setBtnImage(iBtn)
            setClicked(false)
        }
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='image-container' >
            <img className='image-container__background-image' src={require(`../source/images/products/${product.image}`)} alt="product" />
            <div className='image-container__frame' style={styles.frame}>
                <p className='frame__img-text' style={styles.text}>{product.text}</p>
                {onMouseOver && <AnimaticLogo />}
                {!mobile && <p className='frame__img-btn-plus' style={styles.text}>+</p>}
            </div>
            {mobile && (!clicked? <img onClick={handleBtnClick} className='frame__img-btn-i iBtn' src={btnImage} alt='button'></img> : <img onClick={handleBtnClick} className='frame__img-btn-i xBtn' src={btnImage} alt='button' ></img>)}
        </div>
    )
}

export default Image