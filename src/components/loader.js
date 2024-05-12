import React from 'react'
// css
import './css/loader.css'
// assets
import round from './assets/purr-cat-in-the-pot-1.png'

const Loader = () => {
  return (
    <div className="loader">
        <div className="mainLoader">
            <img src={round} alt="" />
        </div>
    </div>
  )
}

export default Loader