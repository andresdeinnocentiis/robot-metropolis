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
        
        <div className={`label ${darkMode ? "light-theme-element light-border" : "light-theme-element dark-border"}`}>
                <img className="icon" src={lightIcon} alt="" onClick={toggleDarkMode} />
                <div className="darkIconBox">
                    <img className="icon" src={darkIcon} alt="" onClick={toggleDarkMode} />
                </div>
                <div className={`toggle-box ${darkMode ? "box-left" : "box-right"}`} ></div>
        </div>
    )
}

export { ButtonToggleLightDarkTheme }