import React, {useContext, useState} from "react";
import { LightDarkThemeContext } from "../contexts/LightDarkThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { isMobile } from "../functions/isMobile";
import animaticLogo from "./elements/animaticLogo";

const Footer = () => {

  const { darkMode } = useContext(LightDarkThemeContext)
  const { language, langScripts } = useContext(LanguageContext)
  const [mobile, setMobile] = useState(isMobile())


  window.addEventListener("resize", () => {
    if(window.innerWidth > 500) {
        setMobile(false)
    } else {
        setMobile(true)
    }
})

  return(
    <>
      <footer className="footer-container">
        <animaticLogo />
        <div className='footer-div'>
          <a className="footer-icon" href="https://www.instagram.com/robotmetropolis/" target="_blank"><i className="fab fa-instagram"></i></a>
          <p className='footer-li footer-text'>{langScripts.footer.text[language]}</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
