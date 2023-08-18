import { Link, NavLink } from "react-router-dom"
import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';
import { useCartContext } from "../../context/cartContext";


const NavBar = () => {

    const { cantidadTotal } = useCartContext();

    return (

        <div>
            <Link to='/' className='alert alert-success inicio' >
                INICIO
            </Link>
            <h1 className='titulo'>Venta de Elementos de Gimnasio</h1>
            <nav className='listado'>
                <NavLink to={'/'}> |  TODO   |</NavLink>
                <NavLink to={'/categoria/Mancuernas'}>|   MANCUERNAS   |</NavLink>
                <NavLink to={'/categoria/Maquinas'}>|   MAQUINAS   |</NavLink>
            </nav>

            <div>
                <h2 className='totalCantidad'>{cantidadTotal()}</h2>
                <Link to='/cart'>
                    <CartWidget />
                </Link>
            </div>

        </div>
    )
}

export default NavBar;