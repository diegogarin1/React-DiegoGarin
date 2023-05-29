import React from 'react'
import img from "./../../assets/logo.png"
import "./Logo.css"

const Logo = () => {
  return (
    <div><img className='logo' src={img} alt="logo-commerce" /></div>
  )
}

export default Logo

