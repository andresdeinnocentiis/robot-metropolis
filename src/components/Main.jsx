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
import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';

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
            setHeight('21rem')
            setOverflow('auto')
        } else {
            setExpand(false)
            setHeight('10rem')
            setOverflow('hidden')
        }
    }


    return (
        <main className='main'>
            <div className="main-container">
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
                <Image product={products.product1} percentage={35}/>
            </div>
            <Carousel1 title={langScripts.projects.title[language]}/>
            <div>
                <Carousel2 title={langScripts.lab.title[language]}/>
            </div>
            <section className='contact-instagram-section'>
                <ContactInfo />
                <Instagram />
            </section>
        </main>
    )
}

export default Main