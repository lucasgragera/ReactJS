import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
    return(
        <div> 
            <h1 className='titulo'>Venta de Elementos de Gimnasio</h1>
            <ul className='listado'>
                <li className='lista'>
                    <a href="">Mancuernas</a>
                </li>
                <li className='lista'>
                    <a href="">Maquinas</a>
                </li>
                <li className='lista'>
                    <a href="">Discos</a>
                </li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;