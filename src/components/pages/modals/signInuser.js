import React, { useState } from 'react'
// css
import '../../css/signInModal.css'
// assets
import logo from '../../assets/logoname.png'
import cat from '../../assets/purr-black-friday.png'
// icons
import { GrFormView,GrFormViewHide  } from "react-icons/gr";

const Usermodalsign = ({ openSignin,setOpensignin }) => {
// useState
const [ showPassbtm, setShowbtn ] = useState(false)
const [ typePass, setTypepass ] =useState('password')

// show & hide pass
const passwordSw = () => {
    if (showPassbtm === false) {
        setTypepass('text')
        setShowbtn(true)
    } else {
        setTypepass('password')
        setShowbtn(false)
    }
}

  return (
    <div className="signInmodal">
        <div className="mainSigninModal">
            <div className="signIn-container">
                <div className="signIn-header">
                    <h1>Create</h1>
                    <img src={logo} alt="" />
                    <h2>account</h2>
                    <img src={cat} alt="" id='catModal'/>
                    <h3>make every part of family happy and healthy</h3>
                    <p>by creating pawsome account, you  aggree to our <span> terms & condition</span> and <span>privacy and policy</span></p>
                </div>
                <div className="signIn-contents">
                    <div className="signIn-inputs">
                        <section className='userLogin'>
                            <h1>Login</h1>
                            <p>username</p>
                            <li>
                                <input type="text" />
                            </li>
                            <p>password</p>
                            <li>
                                <input type={typePass} />
                                {!showPassbtm ? <button onClick={passwordSw}><GrFormView /></button> : <button onClick={passwordSw}><GrFormViewHide GrFormView/></button>}
                            </li>
                            <div className="userModalbtn">
                                <button>Login</button>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Usermodalsign