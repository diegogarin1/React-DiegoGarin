import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link  to="/">
          Home
        </Link>
        <Link  to="/men">
          Men
        </Link>
        <Link  to="/women">
          Women
        </Link>
        <Link  to="/electronics">
          Electronics
        </Link>
        <Link  to="/jewelry">
          Jewelry        </Link>
          <Link  to="/cart">
          Cart        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
