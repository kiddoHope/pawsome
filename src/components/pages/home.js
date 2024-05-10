import React from 'react'
// css
import '../css/home.css'
// js file
import Featuredpost from './featuredpost'

const Home = () => {
  return (
    <div className="mainHome">
        <div className="mainHome-container">
            <div className="mainHome-header">
              
            </div>
            <div className="mainHome-contents">
                <Featuredpost/>
            </div>
        </div>
    </div>
  )
}

export default Home