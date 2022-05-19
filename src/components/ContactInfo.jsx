import React, {useContext, useEffect, useState} from 'react'
import { isMobile } from "../functions/isMobile";
import { LightDarkThemeContext } from "../contexts/LightDarkThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";






const ContactInfo = () => {
    
    const { darkMode } = useContext(LightDarkThemeContext)
    const { language, langScripts } = useContext(LanguageContext)
    const [mobile, setMobile] = useState(isMobile())
    
    
    window.addEventListener("resize", () => {
        if(window.innerWidth > 500) {
            setMobile(false)
        } else {
            setMobile(true)
        }
    })
    
    return (
        <div className='contact-section'>
            <h1 className='contact-section__title'>{langScripts.contact.title[language]}</h1>
        </div>
    )
}

export default ContactInfo