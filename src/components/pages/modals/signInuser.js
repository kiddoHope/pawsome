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
const [ typePass, setTypepass ] = useState('password')
// switch btn login
const [ switchSignin, setSwitchsignin ] = useState('login')

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

// switches btn sign in
const loginBtn = () => {
    setSwitchsignin('login')
}
const signBtn = () => {
    setSwitchsignin('signin')
}
const forgotBtn = () => {
    setSwitchsignin('forgot')
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
                        <section className={`userLogin ${switchSignin}`}>
                            <h1>Login</h1>
                            <p>username</p>
                            <li>
                                <input type="text" placeholder='username'/>
                            </li>
                            <p>password</p>
                            <li>
                                <input type={typePass} placeholder='password'/>
                                {!showPassbtm ? <button onClick={passwordSw}><GrFormView /></button> : <button onClick={passwordSw}><GrFormViewHide GrFormView/></button>}
                            </li>
                            <div className="userModalbtn">
                                <button>Login</button>
                            </div>
                            <h3 onClick={forgotBtn}>forgot password?</h3>
                            <div className="switchBtn">
                                <p>don't have pawsome account?</p>
                                <button onClick={signBtn}>create account</button>
                            </div>
                        </section>
                        <section className={`userSignup ${switchSignin}`}>
                            <h1>Sign up</h1>
                            <p>username</p>
                            <li>
                                <input type="text" placeholder='ex. budBoy_Dog'/>
                            </li>
                            <p>email or mobile no.</p>
                            <li>
                                <input type="text" placeholder='ex. budDog@email.com'/>
                            </li>
                            <p>password</p>
                            <li>
                                <input type={typePass} placeholder='password'/>
                                {!showPassbtm ? <button onClick={passwordSw}><GrFormView /></button> : <button onClick={passwordSw}><GrFormViewHide GrFormView/></button>}
                            </li>
                            <div className="userModalbtn">
                                <button>Create</button>
                            </div>
                            <div className="switchBtn">
                                <p>already have pawsome account?</p>
                                <button onClick={loginBtn}>login account</button>
                            </div>
                        </section>
                        <section className={`userForgot ${switchSignin}`}>
                            <h1>forgot</h1>
                            <p>username / email / mobile no.</p>
                            <li>
                                <input type="text" placeholder='ex. budDog@email.com'/>
                            </li>
                            <div className="userModalbtn">
                                <button>search and recover</button>
                            </div>
                            <div className="switchBtn">
                                <p>don't have pawsome account?</p>
                                <button onClick={signBtn}>create account</button>
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