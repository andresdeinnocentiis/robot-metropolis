import React, {useContext, useEffect, useState} from 'react'
import { isMobile } from "../functions/isMobile";
import { LightDarkThemeContext } from "../contexts/LightDarkThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import logoDesktopforDark from "../icons/logo-text-for-dark.svg"
import logoDesktopforLight from "../icons/logo-text-for-light.svg"


const Main = () => {
    const { darkMode } = useContext(LightDarkThemeContext)
    const { language, langScripts } = useContext(LanguageContext)
    const [mobile, setMobile] = useState(isMobile())
    const [logo, setLogo] = useState(logoDesktopforDark)

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

    return (
        <main className='main'>
            <div className="main-container">
                {mobile ? <div className="main-logo"><img className="logoImg" src={logo} alt="logo"></img></div> : <></>}
                <div className='main-paragraph'>
                    <p className='main-text'>{langScripts.main.text[language]}</p>
                    <p className='main-more'>{langScripts.main.verMas[language]}</p>
                </div>
            </div>
        </main>
    )
}

export default Main