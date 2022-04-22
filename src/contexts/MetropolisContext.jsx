import React, {createContext, useState} from "react";


const MetropolisContext = createContext([])


const MetropolisContextProvider = ({children}) => { 
    const [modeMetropolis, setModeMetropolis] = useState(false)

    const toggleModeMetropolis = () => {

        setModeMetropolis(prevModeMetropolis => !prevModeMetropolis)    
    }

    return (
        <MetropolisContext.Provider value={{modeMetropolis, toggleModeMetropolis}}>
            {children}
        </MetropolisContext.Provider>
    )



}



export { MetropolisContext, MetropolisContextProvider }












