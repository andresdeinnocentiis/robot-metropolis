import React, {useContext,useState} from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import AnimaticLogo from "./animaticLogo";
import { LightDarkThemeContext } from "../contexts/LightDarkThemeContext";
import { isMobile } from "../functions/isMobile";

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
        <AnimaticLogo />
        <div className='footer-div'>
          <a className="footer-icon" href="https://www.instagram.com/robotmetropolis/" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
          <p className='footer-li footer-text'>{langScripts.footer.text[language]}</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
