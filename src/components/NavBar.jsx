import React, {useContext, useEffect, useState} from "react";
import { LightDarkThemeContext } from "../contexts/LightDarkThemeContext";
import {NavLink} from "react-router-dom"
import { TogglerOpen } from "./elements/NavButtonToggler";
import { isMobile } from "../functions/isMobile";
import logoDesktopforLight from "../icons/logo-text-for-light.svg"
import logoMobileforLight from "../icons/logo loader-for-light.svg"
import logoDesktopforDark from "../icons/logo-text-for-dark.svg"
import logoMobileforDark from "../icons/logo loader-for-dark.svg"



const Navbar = () => {
    const { darkMode } = useContext(LightDarkThemeContext)

    const [navbarOpen, setNavbarOpen] = useState("")
    const [toggleIcon, setTogglerIcon] = useState("")
    const [mobile, setMobile] = useState(isMobile())
    const [logo, setLogo] = useState({desktop:logoDesktopforLight,mobile:logoMobileforLight})

    const handleToggle = () => {
        navbarOpen ? setNavbarOpen("") : setNavbarOpen("nav__active")
        navbarOpen ? setTogglerIcon("") : setTogglerIcon("toggle")
    
    }

    useEffect(() => {
        darkMode ? setLogo({desktop:logoDesktopforDark,mobile:logoMobileforDark}) : setLogo({desktop:logoDesktopforLight,mobile:logoMobileforLight})
    }, [darkMode]);
    

    window.addEventListener("resize", () => {
        if(window.innerWidth > 500) {
            setNavbarOpen("")
            setMobile(false)
        } else {
            setMobile(true)
        }
    })

    
    
    return(
        <nav id="navbar" className={`sticky ${darkMode? "dark-theme": "light-theme"}`}>
            <div className="nav-collapsed">
                <div className="nav-logo"><NavLink className='logoLink' to={"/"}><img className="logoImg" src={mobile ? logo.mobile : logo.desktop} alt="logo"></img></NavLink></div>
                {mobile ? <TogglerOpen onClick={handleToggle}  toggleIcon={toggleIcon} /> : <></>}
            </div>
            
            <div className={`nav-container ${navbarOpen}`}>          
                <div className="nav-menu">
                    <ul className="nav-ul">
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar