import React, { useContext } from "react";
import { LightDarkThemeContext } from "../contexts/LightDarkThemeContext";


const AnimaticLogo = () => {

  const {darkMode} = useContext(LightDarkThemeContext)

  function visible (elementArray){
    for (let element of elementArray){
      element.style.visibility="visible"
    }
  }

  function hidden (elementArray){
    for (let element of elementArray){
      element.style.visibility="hidden"
    }
  }

  function animationLogo(){
    let lineA = document.getElementsByClassName("lineA")
    let lineB = document.getElementsByClassName("lineB")
    let lineC = document.getElementsByClassName("lineC")
    let lineD = document.getElementsByClassName("lineD")
    let lineE = document.getElementsByClassName("lineE")
    let lineF = document.getElementsByClassName("lineF")
    setTimeout(()=>{
      visible(lineA)
    },1250)
    setTimeout(()=>{
      visible(lineB)
    },2500)
    setTimeout(()=>{
      visible(lineC)
    },3750)
    setTimeout(()=>{
      hidden(lineA)
      hidden(lineB)
      hidden(lineC)
      visible(lineD)
      visible(lineE)
      visible(lineF)
    },5000)
    setTimeout(()=>{
      visible(lineA)
      visible(lineB)
      visible(lineC)
    },6250)
    setTimeout(()=>{
      hidden(lineA)
      hidden(lineB)
      hidden(lineC)
      hidden(lineD)
      hidden(lineE)
      hidden(lineF)
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
      <div className={darkMode? "dark-logoLine lineA" : "light-logoLine lineA"}></div>
      <div className={darkMode? "dark-logoLine lineB" : "light-logoLine lineB"}></div>
      <div className={darkMode? "dark-logoLine lineC" : "light-logoLine lineC"}></div>
      <div className={darkMode? "dark-logoLine lineD" : "light-logoLine lineD"}></div>
      <div className={darkMode? "dark-logoLine lineE" : "light-logoLine lineE"}></div>
      <div className={darkMode? "dark-logoLine lineF" : "light-logoLine lineF"}></div>  
    </div>
  )
}

export default AnimaticLogo