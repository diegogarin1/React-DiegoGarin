import React from 'react'
import img from "./../../assets/logo.png"
import "./Logo.css"
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
      <img className='logo' src={img} alt="logo-commerce" />
      </Link></div>
  )
}

export default Logo

