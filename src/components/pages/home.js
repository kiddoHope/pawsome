import React, { useState } from 'react'
// css
import '../css/home.css'
// js file
import Featuredpost from './featuredpost'
import Introhome from './introHome'
import Fetchbuyers from './backend/fetchBuyers'
import Usermodalsign from './modals/signInuser'
import why from '../assets/why.png'
import HomeprdList from './homePrdlist'

const Home = ({}) => {
const [localCurbuyer,setLocalcurbuyer] = useState()
const [buyerList,setBuyerlist] = useState()
const [openModal,setOpenModal] = useState()

console.log(openModal);

  return (
    <>
    <div className={`createModalhome ${openModal}`}>
        <Usermodalsign onOpensignin={setOpenModal}/>
    </div>
      <Fetchbuyers onDatafetchbuyers={setBuyerlist} onDatafetchedlocalbuyer={setLocalcurbuyer}/>
      <div className="mainHome">
          <div className="mainHome-container">
              <div className="mainHome-contents">
                  <Introhome onOpensignin={setOpenModal}/>
                  <div className="whyInfo">
                    <div className="whyPawsome">
                      <img src={why} alt="" />
                    </div>
                    <div className="introAnscards">
                      <ul>
                        <li>
                          <h1>Premium Quality</h1>
                          <p>We handpick only the finest ingredients for our pet food, ensuring that your furry friend gets the nutrition they deserve.</p>
                        </li>
                        <li>
                          <h1>Variety</h1>
                          <p>Whether your pet prefers kibble, wet food, or treats, we offer a wide range of options to suit every taste and dietary requirement.</p>
                        </li>
                        <li>
                          <h1>Health and Wellness</h1>
                          <p>Our products are formulated by pet nutrition experts to promote overall health and vitality, supporting your pet's well-being from nose to tail.</p>
                        </li>
                        <li>
                          <h1>Convenience</h1>
                          <p>Say goodbye to last-minute trips to the store! With Pawsome, you can order your pet's favorite food from the comfort of your home and have it delivered straight to your doorstep.</p>
                        </li>
                        <li>
                          <h1>Affordability</h1>
                          <p>We believe that every pet deserves the best without breaking the bank. That's why we offer competitive prices and regular discounts to make caring for your pet more accessible.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <HomeprdList/>
                  <Featuredpost/>
              </div>
          </div>
      </div>
    </>
  )
}

export default Home