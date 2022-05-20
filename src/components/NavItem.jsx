import React, {useContext} from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { PATHS } from "../routes/routes";


const NavItem = () => {
    const { language } = useContext(LanguageContext)

    return(
        <>
        {PATHS.map((path) => {
            
            return(
                <li key={path.pathId} className="nav-li">
                    <a className="nav-link" href={path.path}>{path.pathName[language]}</a>
                </li>
            )
        })}
        </>
    )
}

export default NavItem