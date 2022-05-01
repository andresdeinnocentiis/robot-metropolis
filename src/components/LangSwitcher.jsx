import React, {useContext} from "react";
import { LanguageContext } from "../contexts/LanguageContext";


const LangSwitcher = () => {
    const { language, langScripts, setLanguage } = useContext(LanguageContext)
    const {langs} = langScripts


    const changeLanguage = () => {

        if(language === "spanish"){
            setLanguage("english")
        } else {
            setLanguage("spanish")
        }
    }
    

    return (
        <li onClick={changeLanguage} className="nav-langSwitcher lang-toggle">
            <p>{langs[language]}</p>
        </li>
    )
}

export default LangSwitcher