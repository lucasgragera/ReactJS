import React from 'react';
import './CartWidget.css'

export const CartWidget = () => {
    return (
        <div className='carrito'>
            <h5>0</h5>
            <img height={30} src="https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping-thumbnail.png" alt="Carrito" />

        </div>
    );
};

export default CartWidget;