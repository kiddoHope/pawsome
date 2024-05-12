import React from 'react'
// css
import './css/footer.css'
// icons
import { FaFacebook,FaInstagramSquare,FaLinkedin } from "react-icons/fa";
// assets
import logoname from './assets/logoname.png'


const Footer = () => {
  return (
    <div className="footer">
        <div className="mainFooter">
            <div className="footer-container">
                <div className="footer-header">
                    <div className="ftLogo">
                        <img src={logoname} alt="" />
                    </div>
                    <div className="footerEndnote">
                        <p>Pawsome is not just an online pet shop; it's a vibrant community hub where you and your furry companions can interact with friends and fellow pet lovers. Our mission is to foster meaningful connections between pets and their humans, enriching the lives of both. Join us in our endeavor to unite more furry families, creating a network of love and support that extends far beyond the digital realm.</p>
                    </div>
                    <span>all rights reserve • 2024</span>
                </div>
                <div className="footer-contents">
                    <div className="ftmessage">
                        <h1>send us a message</h1>
                        <section>
                            <textarea name="" id="" rows="5" placeholder='give us some feedback...'/>
                            <div className="ftMsbtn">
                                <button>send</button>
                            </div>
                        </section>
                    </div>
                    <div className="ftSocials">
                        <div className="ftSocialsicons">
                            <h1>Follow us here:</h1>
                            <div className="fticons">
                                <FaFacebook className='ftIcons'/>
                                <FaInstagramSquare className='ftIcons'/>
                                <FaLinkedin className='ftIcons'/>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <h1>developers portal</h1>
                            <p>Pawsome Team</p>
                            <p>the developer</p>
                        </li>
                        <li>
                            <h1>contacts</h1>
                            <p>email</p>
                            <p>number</p>
                        </li>
                        <li>
                            <h1>about us</h1>
                            <p>terms and condition</p>
                            <p>privacy policy</p>
                        </li>
                        <li>
                            <h1>statistics</h1>
                            <p>consumers</p>
                            <p>products</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer