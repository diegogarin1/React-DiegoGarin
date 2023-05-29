import React from 'react';
import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import "./Header.css";


const Header = () => {
  return (
    <div>
        <header className='Header'>
            <Logo />
            <NavBar />
        </header>
    </div>
  )
}

export default Header