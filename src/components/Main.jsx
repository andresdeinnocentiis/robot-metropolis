import React, {useContext, useEffect, useState} from 'react'
import { isMobile } from "../functions/isMobile";
import { LightDarkThemeContext } from "../contexts/LightDarkThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import logoDesktopforDark from "../icons/logo-text-for-dark.svg"
import logoDesktopforLight from "../icons/logo-text-for-light.svg"
import AnimaticLogo from "./animaticLogo";
import Image from './Image';
import products from '../products/products'
import ContactInfo from './ContactInfo';
import Instagram from './Instagram';
import BottonVideo from '../source/videos/background-video2.mp4'

const Main = () => {
    const { darkMode } = useContext(LightDarkThemeContext)
    const { language, langScripts } = useContext(LanguageContext)
    const [mobile, setMobile] = useState(isMobile())
    const [logo, setLogo] = useState(logoDesktopforDark)
    const [expand, setExpand] = useState(false)
    const [height, setHeight] = useState('10rem')
    const [overflow, setOverflow] = useState('hidden')
    

    useEffect(() => {
        darkMode ? setLogo(logoDesktopforDark) : setLogo(logoDesktopforLight)
    }, [darkMode]);

    
    window.addEventListener("resize", () => {
        if(window.innerWidth > 500) {
            setMobile(false)
        } else {
            setMobile(true)
        }
    })

    

    const styles = {
        mainText: {
            height: height,
            overflow: overflow,
        }
    }

    const handleExpand = (e) => {
        if(!expand) {
            setExpand(true)
            setHeight('22rem')
            setOverflow('auto')
        } else {
            setExpand(false)
            setHeight('10rem')
            setOverflow('hidden')
        }
    }


    return (
        <main className='main'>
            <div id='about' className="main-container">
                {mobile ? <div className="main-logo"><img className="logoImg" src={logo} alt="logo"></img></div> : <></>}
                <div className='main-paragraph'>
                    {!mobile && <AnimaticLogo />}
                    <p style={styles.mainText} className='main-text'>
                        <span  className='line first-line'>{langScripts.main.text.firstLine[language]}</span>
                        <br />
                        <span className='line second-line'>{langScripts.main.text.secondLine[language]}</span>
                    </p>
                    <p onClick={handleExpand} className='main-more'>{ !expand? langScripts.main.verMas[language] : langScripts.main.verMenos[language]}</p>
                </div>
                <Image product={products.product1} />
            </div>
            <section className='contact-instagram-section'>
            <video className='videoTag-bottom' autoPlay loop muted>
                <source src={BottonVideo} type='video/mp4' />
            </video>
                <ContactInfo />
                <Instagram />
            </section>
        </main>
    )
}

export default Main