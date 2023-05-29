import React from 'react'
import CartWidget from "../cartwidget/CartWidget"
import Link from '@mui/material/Link/Link';
import "./NavBar.css"

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul className='navBar'>
                    <li><Link href="#" underline="hover">
                        {'Home'}
                    </Link></li>
                    <li><Link href="#" underline="hover">
                        {'Products'}
                    </Link></li>
                    <li><Link className='cartWidget' href="#" underline="hover">
                        {'Cart'}            <CartWidget />
                    </Link></li>

                </ul>
            </nav>
        </div>
    )
}

export default NavBar