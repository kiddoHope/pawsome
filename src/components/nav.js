import React,{useState,useEffect} from 'react'
// css
import './css/nav.css'
// icons
import { TbPawFilled } from "react-icons/tb";
import { IoHomeOutline,IoPawOutline,IoSearchSharp,IoBagAddOutline  } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
// assets
import logoname from './assets/logoname.png'
import Usermodalsign from './pages/modals/signInuser'

const Nav = ( {close} ) => {
// useState
// fetch buyers
const [user,setUser] = useState()
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
  localuser()
  // Clean up event listener
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

// open modal function
const openModalsign = () => {
    setOpensignin(true)
}
const localuser = () => {
  const localLoginsession = localStorage.getItem("loginBuyerlocalSession");
  console.log(localLoginsession);

  if (localLoginsession !== '') {
    setLogout(true)
    fetchBuyerlist()
  } else {
    setLogout(false)
  }
}

async function fetchBuyerlist() {
  const data = localStorage.getItem('currentUser')
  const jsondata = JSON.parse(data)
  setUser(jsondata)
}

const logoutbtn = () => {
  localStorage.setItem("loginBuyerlocalSession", '');
  localStorage.setItem("currentUser", '');
  window.location.reload()
}

  return (
    <div className={`navMain ${hasShadow ? 'shadow' : ''}`}>
        <nav>
          <div className={`logsignModal ${openSignin}`}>
              <Usermodalsign onOpensignin={setOpensignin} onOpenCreate={'signin'}/>
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
                      {/* {!logout ? <button onClick={openModalsign}> <TbPawFilled className='signIco'/>sign up</button> :  
                      <button className='userBtnnav'> <TbPawFilled className='signIco'/>{user.username}
                        <ul className='userdetList'>
                          <li>profile</li>
                          <li>pet</li>
                          <li onClick={logoutbtn}>Logout</li>
                        </ul>
                      </button>
                      } */}
                  </div>
              </div>
          </div>
        </nav>
        <div className="mobileNav">
          <div className="mainMobile">
            <section className='mbLogosearch'>
              <div className="mbnavlogo">
                <img src={logoname} alt="" />
              </div>
              <div className="mbSearch">
                <div className="searchInput">
                  <input type="text" /><IoSearchSharp className='mbIconsearch'/>
                </div>
              </div>
            </section>
            <section className='mbNavicons'>
              <IoHomeOutline className='mbIcons'/>
              <IoPawOutline className='mbIcons'/>
              <IoBagAddOutline className='mbIcons'/>
              <FiShoppingCart className='mbIcons'/>
              <CgProfile className='mbIcons'/>
              <FaBars className='mbIcons'/>
            </section>
          </div>
        </div>
    </div>
  )
}

export default Nav