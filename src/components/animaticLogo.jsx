import React, { useContext } from "react";
import { LightDarkThemeContext } from "../contexts/LightDarkThemeContext";


const AnimaticLogo = () => {

  const {darkMode} = useContext(LightDarkThemeContext)

  function animationLogo(){
    let lineA = document.getElementById("lineA")
    let lineB = document.getElementById("lineB")
    let lineC = document.getElementById("lineC")
    let lineD = document.getElementById("lineD")
    let lineE = document.getElementById("lineE")
    let lineF = document.getElementById("lineF")
    setTimeout(()=>{
      lineA.style.visibility="visible"
    },1250)
    setTimeout(()=>{
      lineB.style.visibility="visible"
    },2500)
    setTimeout(()=>{
      lineC.style.visibility="visible"
    },3750)
    setTimeout(()=>{
      lineA.style.visibility="hidden"
      lineB.style.visibility="hidden"
      lineC.style.visibility="hidden"
      lineD.style.visibility="visible"
      lineE.style.visibility="visible"
      lineF.style.visibility="visible"
    },5000)
    setTimeout(()=>{
      lineA.style.visibility="visible"
      lineB.style.visibility="visible"
      lineC.style.visibility="visible"
    },6250)
    setTimeout(()=>{
      lineA.style.visibility="hidden"
      lineB.style.visibility="hidden"
      lineC.style.visibility="hidden"
      lineD.style.visibility="hidden"
      lineE.style.visibility="hidden"
      lineF.style.visibility="hidden"
    },7500)
  }

  function repetir(){
    setInterval(()=>{
      animationLogo()
    },7500)
  }

  window.addEventListener('load',animationLogo)
  window.addEventListener('load',repetir)

  return(
    <div className="logo-containerA">
      <div id="lineA" className={darkMode? "dark-logoLine" : "light-logoLine"}></div>
      <div id="lineB" className={darkMode? "dark-logoLine" : "light-logoLine"}></div>
      <div id="lineC" className={darkMode? "dark-logoLine" : "light-logoLine"}></div>
      <div id="lineD" className={darkMode? "dark-logoLine" : "light-logoLine"}></div>
      <div id="lineE" className={darkMode? "dark-logoLine" : "light-logoLine"}></div>
      <div id="lineF" className={darkMode? "dark-logoLine" : "light-logoLine"}></div>  
    </div>
  )
}

export default AnimaticLogo