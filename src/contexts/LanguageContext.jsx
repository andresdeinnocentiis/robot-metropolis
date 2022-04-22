import React, {createContext, useState} from "react";
import { langScripts } from "../LangScripts/langScripts"



const LanguageContext = createContext([])

const LanguageContextProvider = ({children}) => {
    const [language, setLanguage] = useState("english")
    
    
    

    return (
        <LanguageContext.Provider value={{language, setLanguage, langScripts}}>
            {children}
        </LanguageContext.Provider>
    )
    
}

export { LanguageContext, LanguageContextProvider }











