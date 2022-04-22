import { useContext } from "react"
import { MetropolisContext } from "../context/MetropolisContext"




const ButtonToggleModeMetropolis = () => {
    const { modeMetropolis, toggleModeMetropolis } = useContext(MetropolisContext)


    return (
        <button className={`toggle-btn ${modeMetropolis? "mode-metropolis-active" : "mode-metropolis-inactive"}`} onClick={toggleModeMetropolis}>
            {modeMetropolis? "Turn off" : "Turn on"}
        </button>
    )
}

export { ButtonToggleModeMetropolis }