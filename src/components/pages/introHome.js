import React,{useState,useEffect} from 'react'
// css
import '../css/introHome.css'
// assets
import pawLogo from '../assets/logoname.png'
import shopcat from '../assets/intro.png'
import apple from '../assets/purr-apple.png'
import fish from '../assets/purr-fish-5.png'
import jar from '../assets/purr-jar-with-cookies.png'
// js file
import Usermodalsign from './modals/signInuser'

const Introhome = ({onOpensignin}) => {


const openCreate = () => {
    onOpensignin(true)
}
  return (
    <div className="introHome">
        <div className="introHomemain">
            <div className="intHome-container">
                <div className="intHome-contents">
                    <section>
                        <div className="floatingImages">
                            <img src={apple} alt="" id='apple'/>
                            <img src={fish} alt="" id='fish'/>
                            <img src={jar} alt="" id='jar'/>
                        </div>
                        <div className="intTexthome">
                            <h1>welcome to</h1>
                            <div className="pawLogointro">
                                <img src={pawLogo} alt="" />
                            </div>
                            <p>Your Pet's Favorite Online Food Store!</p>
                            <div className="introBtns">
                                <button>shop now</button>
                                <button onClick={openCreate}>create account</button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <img src={shopcat} alt="" className='shoopCat'/>
                    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Introhome