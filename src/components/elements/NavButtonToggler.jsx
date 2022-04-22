import React, {useContext} from "react";
import { LightDarkThemeContext } from "../../contexts/LightDarkThemeContext";

const TogglerOpen = (props) => {

    const { darkMode } = useContext(LightDarkThemeContext)

    return (
        <div  onClick={props.onClick} className={`nav__toggler ${props.toggleIcon}`}>
            <div className={`line1 ${darkMode ? "dark-theme-element" : "light-theme-element"}`}></div>
            <div className={`line2 ${darkMode ? "dark-theme-element" : "light-theme-element"}`}></div>
            <div className={`line3 ${darkMode ? "dark-theme-element" : "light-theme-element"}`}></div>
        </div>
    )
}

export { TogglerOpen }