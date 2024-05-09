import React from 'react'
// css
import '../../css/scSignupmodal.css'
// assets
import purr from '../../assets/purr-remote-work.png'
import logoPawsome from '../../assets/logoname.png'

const SuccessSignup = () => {
  return (
    <div className="successSignup">
        <div className="scSignupmain">
            <div className="scSignup-container">
                <div className="scSignup-header">
                    <h1>Welcome to</h1>
                    <div className="logoPawsome">
                        <img src={logoPawsome} alt="" />
                    </div>
                </div>
                <div className="scSignup-content">
                    <div className="scImg">
                        <img src={purr} alt="" />
                    </div>
                    <p>You successfully created a Pawsome account</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessSignup