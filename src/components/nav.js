import React,{useState,useEffect} from 'react'
// css
import './css/nav.css'
// icons
import { TbPawFilled } from "react-icons/tb";
// assets
import logoname from './assets/logoname.png'
import Usermodalsign from './pages/modals/signInuser'
import Fetchbuyers from './pages/backend/fetchBuyers'

const Nav = ( {close} ) => {
// useState
// fetch local buyer
const [localCurbuyer,setLocalcurbuyer] = useState('')
// fetch buyers
const [buyerList,setBuyerlist] = useState()
// open signin modal
const [openSignin,setOpensignin] = useState(false)
// cast shadow
const [hasShadow, setHasShadow] = useState(false);
// set Btns
const [logout,setLogout] = useState(false)


// useEffect

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  // Clean up event listener
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

// open modal function
const openModalsign = () => {
    setOpensignin(true)
}

const logoutbtn = () => {
  localStorage.setItem("loginBuyerlocalSession", '');
  localStorage.setItem("currentUser", '');
}

  return (
    <div className={`navMain ${hasShadow ? 'shadow' : ''}`}>
        <nav>
            <Fetchbuyers onDatafetchbuyers={setLocalcurbuyer} onDatafetchedlocalbuyer={setBuyerlist}/>
            <div className={`logsignModal ${openSignin}`}>
                <Usermodalsign onOpensignin={setOpensignin}/>
            </div>
            <div className="nav-container">
                <div className="mav-contents">
                    <div className="navlogo">
                        <img src={logoname} alt="" />
                    </div>
                    <div className="signUpnav">
                        <ul>
                            <li>statistics</li>
                            <li>showcase</li>
                            <li>products</li>
                            <li>about us</li>
                        </ul>
                        <button onClick={openModalsign}> <TbPawFilled className='signIco'/>sign up</button>
                        <button onClick={logoutbtn}> <TbPawFilled className='signIco'/>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav