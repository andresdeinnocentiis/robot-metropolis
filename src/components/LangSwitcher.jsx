import React, {useContext, useState} from "react";
import { LanguageContext } from "../contexts/LanguageContext";


const LangSwitcher = () => {
    const { language, langScripts, setLanguage } = useContext(LanguageContext)
    const {langs} = langScripts
    const [ showLangs, setShowLangs ] = useState("")


    const changeLanguage = (newLanguage) => {

        switch(newLanguage) {
            case "EN":
                setLanguage("english")
                break;
            case "ES":
                setLanguage("spanish")
                break;
        }
        
    }

    const openLangMenu = () => {
        /*setShowLangs(prev => !prev)*/
        !showLangs? setShowLangs("visible") : setShowLangs("")
    }

    return (
        <li onClick={openLangMenu} className="nav-langSwitcher dropdown-toggle">
            <p>{langScripts.langs[language]}</p>
            
            <ul className={`dropdown-menu ${showLangs}`}>
                {Object.values(langs).map((lang) => {
                    return(
                        <li className="nav-li-lang" onClick={({target}) => changeLanguage(target.innerHTML)} key={lang}>{lang}</li>
                    )
                })}
                
            </ul>
        </li>
    )
}

export default LangSwitcher