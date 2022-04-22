import { useContext } from "react"
import { MetropolisContext } from "../contexts/MetropolisContext"



const TuboLuz = (props) => {
    const { modeMetropolis } = useContext(MetropolisContext)


    return (
        <div className={`tubo-luz neon ${props.positionClass} ${modeMetropolis? "light-on" : "light-off"}`}>
            <span className={`${modeMetropolis? props.whiteLight : ""}`}>
            </span>
        </div>
    )
}

export { TuboLuz }









