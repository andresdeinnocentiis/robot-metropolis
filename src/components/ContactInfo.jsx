import React, {useContext} from 'react'
import { LanguageContext } from "../contexts/LanguageContext";






const ContactInfo = () => {
    
    const { language, langScripts } = useContext(LanguageContext)
    
    
    return (
        <div id="contact-section" className='contact-section'>
            <h1 className='contact-section__title'>{langScripts.contact.title[language]}</h1>
            <div className='contact-section__container'>
                <p className='contact-text'>{langScripts.contact.text[language]}</p>
                <p className='contact-mail'>robotmetropolis@gmail.com</p>
                <a href='https://www.instagram.com/robotmetropolis' rel="noreferrer" target='_blank' className='contact-instaLink'>https://www.instagram.com/robotmetropolis/</a>
            </div>
        </div>
    )
}

export default ContactInfo