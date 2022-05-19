import React, {useContext} from 'react'
import { LanguageContext } from "../contexts/LanguageContext";
import Img1 from "../source/images/products/img1.png"
import Img2 from "../source/images/products/img2.png"
import Img3 from "../source/images/products/img3.png"
import Img4 from "../source/images/products/img4.png"
import Img5 from "../source/images/products/img5.png"
import Img6 from "../source/images/products/img6.png"



const Instagram = () => {

    const { language, langScripts } = useContext(LanguageContext)
    

    return (
        <div className='instagram-section'>
            <h1 className='instagram-section__title'>{langScripts.instagram.title[language]}</h1>
            <div className='instagram-section__profile'>
                <div className='profile__first-line'>
                    <div className='first-line__profile-img'></div>
                    <div className='first-line__view-profile'>
                        <a href="https://www.instagram.com/robotmetropolis/" target="_blank" rel="noreferrer">{langScripts.instagram.view[language]}</a>
                    </div>
                </div>
                <div className='profile__grid'>
                    <a href='https://www.instagram.com/p/BsVMHK9AcQG/' className='grid__img' target="_blank" rel="noreferrer">
                        <img className='grid-img' src={Img1} alt="" />
                    </a>
                    <a href='https://www.instagram.com/p/B7TDWbaAb76/' className='grid__img' target="_blank" rel="noreferrer">
                        <img className='grid-img' src={Img2} alt="" />
                    </a>
                    <a href='https://www.instagram.com/p/Buk0NcJAijN/' className='grid__img' target="_blank" rel="noreferrer">
                        <img className='grid-img' src={Img3} alt="" />
                    </a>
                    <a href='https://www.instagram.com/p/CXr2jV3Adez/' className='grid__img' target="_blank" rel="noreferrer">
                        <img className='grid-img' src={Img4} alt="" />
                    </a>
                    <a href='https://www.instagram.com/p/CGbp2JggKXj/' className='grid__img' target="_blank" rel="noreferrer">
                        <img className='grid-img' src={Img5} alt="" />
                    </a>
                    <a href='https://www.instagram.com/p/CR9FXJog43a/' className='grid__img' target="_blank" rel="noreferrer">
                        <img className='grid-img' src={Img6} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Instagram