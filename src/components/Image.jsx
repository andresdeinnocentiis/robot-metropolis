import React, { useState } from 'react'
import { isMobile } from "../functions/isMobile";
import AnimaticLogo from "../components/animaticLogo";
import iBtn from '../source/images/ibtn.svg'
import xBtn from '../source/images/x.png'
import PlusButton from './elements/PlusButton';




const Image = ({product}) => {
    const [mobile, setMobile] = useState(isMobile())
    const [onMouseOver, setOnMouseOver] = useState(false)
    const [opacity, setOpacity] = useState('0')
    const [scale, setScale] = useState('95%')
    const [padding, setPadding] = useState('50px 0 0 20px')
    const [btnImage, setBtnImage] = useState(iBtn)
    const [clicked, setClicked] = useState(false)

    let styles = {
        frame: {
            width:'100%',
            height:'100%',
            opacity: opacity,  
            transition: 'all .1s linear',
        },
        frameMobile:{
            width:'100%',
            height:'100%',
            opacity: opacity,  
            transition: 'all .1s linear',
            scale: scale,
        },
        text: {
            transition: 'all .2s linear',
            color:'white',
             
        },
        textMobile: {
            transition: 'all .2s linear',
            padding:padding,
            opacity: opacity, 
            color:'white',
        },
        btnMobile: {
            transition: 'all .2s linear',
            opacity: opacity, 
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
            setScale(prev => '90%')
            setPadding(prev => '25px 0 0 20px')
            setClicked(true)
        } else {
            setBtnImage(iBtn)
            setOpacity(prev => '0')
            setScale(prev => '95%')
            setPadding(prev => '50px 0 0 20px')
            setClicked(false)
        }
    }

    return (
        <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className='image-container' >
            <img className='image-container__background-image' src={require(`../source/images/products/${product.image}`)} alt="product" />
            <div className='image-container__frame' style={!mobile? styles.frame : styles.frameMobile}>
                <p className='frame__img-text' style={!mobile ? styles.text : styles.textMobile}>{product.text}</p>
                {onMouseOver && <AnimaticLogo />}
                { mobile ? clicked && <PlusButton styles={styles.btnMobile}/> : <PlusButton styles={styles.text} />}
            </div>
            {mobile && (!clicked? <img onClick={handleBtnClick} className='frame__img-btn-i iBtn' src={btnImage} alt='button'></img> : <img onClick={handleBtnClick} className='frame__img-btn-i xBtn' src={btnImage} alt='button' ></img>)}
        </div>
    )
}

export default Image