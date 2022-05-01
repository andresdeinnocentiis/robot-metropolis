import React, {createContext, useEffect, useState} from "react";


const LightDarkThemeContext = createContext([])


const LightDarkThemeContextProvider = ({children}) => { 
    const [darkMode, setDarkMode] = useState(true)

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode)   
    }

    
    useEffect(()=> {
        const body = document.getElementById("body")
        if (darkMode) {
            body.classList.add("dark-theme")
            body.classList.remove("light-theme")
        } else {
            body.classList.add("light-theme")
            body.classList.remove("dark-theme")
        } 
    },[darkMode])

    return (
        <LightDarkThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </LightDarkThemeContext.Provider>
    )



}



export { LightDarkThemeContext, LightDarkThemeContextProvider }