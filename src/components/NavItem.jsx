import React, {useContext} from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import {NavLink} from "react-router-dom"
import { PATHS } from "../routes/routes";


const NavItem = () => {
    const { language } = useContext(LanguageContext)

    return(
        <>
        {PATHS.map((path) => {
            
            return(
                <li key={path.pathId} className="nav-li">
                    <NavLink className="nav-link" to={path.path}>{path.pathName[language]}</NavLink>
                </li>
            )
        })}
        </>
    )
}

export default NavItem