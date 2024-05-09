import React,{useState} from 'react'
// css
import './css/nav.css'
// assets
import logoname from './assets/logoname.png'
import Usermodalsign from './pages/modals/signInuser'
import Fetchbuyers from './pages/backend/fetchBuyers'

const Nav = () => {
// useState
// fetch local buyer
const [localCurbuyer,setLocalcurbuyer] = useState('')
// fetch buyers
const [buyerList,setBuyerlist] = useState()
// open signin modal
const [openSignin,setOpensignin] = useState(false)


// open modal function
const openModalsign = () => {
    setOpensignin(true)
}


  return (
    <div className="navMain">
        <nav>
            <Fetchbuyers onDatafetchbuyers={setLocalcurbuyer} onDatafetchedlocalbuyer={setBuyerlist}/>
            <Usermodalsign openSignin={openSignin} setOpensignin={setOpensignin}/>
            <div className="nav-container">
                <div className="mav-contents">
                    <div className="navlogo">
                        <img src={logoname} alt="" />
                    </div>
                    <div className="signUpnav">
                        <button onClick={openModalsign}>sign up</button>
                        <span className='lineNav'></span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav