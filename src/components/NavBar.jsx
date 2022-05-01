import React, {useContext, useEffect, useState} from "react";
import { LightDarkThemeContext } from "../contexts/LightDarkThemeContext";
import {NavLink} from "react-router-dom"
import { TogglerOpen } from "./elements/NavButtonToggler";
import { isMobile } from "../functions/isMobile";
import NavItem from "./NavItem";
import LangSwitcher from "./LangSwitcher";
import { ButtonToggleLightDarkTheme } from "./elements/LightDarkThemeButton";
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
        <nav id="navbar" className={`sticky`}>
            <div className={`nav-collapsed ${darkMode? "dark-theme-navbar": "light-theme-navbar"}`}>
                <div className={`nav-logo ${navbarOpen ? 'full-logo' : ''}`}><NavLink className='logoLink' to={"/"}><img className="logoImg" src={mobile && !navbarOpen ? logo.mobile : logo.desktop} alt="logo"></img></NavLink></div>
                {mobile ? 
                    <TogglerOpen onClick={handleToggle}  toggleIcon={toggleIcon} /> 
                        : 
                    <div className={`nav-container nav__active`}>          
                        <div className="nav-menu">
                            <ul className="nav-ul">
                                <NavItem />
                                <LangSwitcher />
                                <li className="li-instagram"><a href="https://www.instagram.com/robotmetropolis/" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <ButtonToggleLightDarkTheme />
                                
                            </ul>
                        </div>
                    </div>}
                </div>
                {navbarOpen ? 
                    <div className={`nav-container ${navbarOpen} ${darkMode? "dark-theme-navbar": "light-theme-navbar"}`}>          
                        <div className="nav-menu">
                            <ul className="nav-ul">
                                <NavItem />
                                <LangSwitcher />
                                <li className="li-instagram"><a href="http://"><i className="fab fa-instagram"></i></a></li>
                                <ButtonToggleLightDarkTheme />
                            </ul>
                        </div>
                    </div> 
                        :
                    <></>
                }
        </nav>
    )
}

export default Navbar