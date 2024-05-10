import React, { useState } from 'react'
// css
import '../css/home.css'
// js file
import Featuredpost from './featuredpost'
import Introhome from './introHome'
import Fetchbuyers from './backend/fetchBuyers'
import Usermodalsign from './modals/signInuser'

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
                  <Featuredpost/>
              </div>
          </div>
      </div>
    </>
  )
}

export default Home