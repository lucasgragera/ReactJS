import { Link, NavLink } from "react-router-dom"
import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';


const NavBar = () => {
    return(

        <div>
            <Link to='/' className='alert alert-success' >
                TODO
            </Link>
            <h1 className='titulo'>Venta de Elementos de Gimnasio</h1>
            <nav className='listado'>
                <NavLink to={'/'}>Todo</NavLink>
                <NavLink to={'/categoria/Mancuernas'}>Mancuernas</NavLink>
                <NavLink to={'/categoria/Maquinas'}>Maquinas</NavLink>
            </nav>

            <Link to='/cart'>
                <CartWidget />
            </Link>
        </div>
)}

export default NavBar;