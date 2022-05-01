import { useContext } from "react"
import { LightDarkThemeContext } from "../../contexts/LightDarkThemeContext"
import lightIcon from "../../icons/light.svg"
import darkIcon from "../../icons/dark.svg"



const ButtonToggleLightDarkTheme = () => {
    const { darkMode, toggleDarkMode } = useContext(LightDarkThemeContext)

    //<button className={`toggle-btn ${darkMode ? "darkMode-active" : "darkMode-inactive"}`} onClick={toggleDarkMode}>
    //{darkMode ? "Turn off" : "Turn on"}
    //</button>


    return (
        <li className={`theme-label ${darkMode? "dark-theme-navbar": "light-theme-navbar"}`}>
            <div className={`label ${darkMode ? "light-theme-element light-border" : "light-theme-element dark-border"}`}>
                    <img onClick={toggleDarkMode} className={`icon ${!darkMode? 'light-mode-active' : ''}`} src={lightIcon} alt=""  />
                    <div className="darkIconBox">
                        <img onClick={toggleDarkMode} className={`icon ${darkMode? 'dark-mode-active' : ''}`} src={darkIcon} alt="" />
                    </div>
                    <div className={`toggle-box ${darkMode ? "box-left" : "box-right"}`} ></div>
            </div>
        </li>
    )
}

export { ButtonToggleLightDarkTheme }