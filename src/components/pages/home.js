import React from 'react'
// css
import '../css/home.css'
// js file
import Featuredpost from './featuredpost'
import Introhome from './introHome'

const Home = () => {
  return (
    <div className="mainHome">
        <div className="mainHome-container">
            <div className="mainHome-header">
              
            </div>
            <div className="mainHome-contents">
                <Introhome/>
                <Featuredpost/>
            </div>
        </div>
    </div>
  )
}

export default Home