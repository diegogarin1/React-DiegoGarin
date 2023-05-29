import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className='CartWidget'> 
      <ShoppingCartCheckoutIcon /> <p>7</p>
    </div>
  )
}

export default CartWidget