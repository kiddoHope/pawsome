import React,{useState} from 'react'
// css
import './css/nav.css'
// icons
import { TbPawFilled } from "react-icons/tb";
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
            <div className={`logsignModal ${openSignin}`}>
                <Usermodalsign setOpensignin={setOpensignin}/>
            </div>
            <div className="nav-container">
                <div className="mav-contents">
                    <div className="navlogo">
                        <img src={logoname} alt="" />
                    </div>
                    <div className="signUpnav">
                        <ul>
                            <li>showcase</li>
                            <li>products</li>
                            <li>about us</li>
                        </ul>
                        <button onClick={openModalsign}> <TbPawFilled className='signIco'/>sign up</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav