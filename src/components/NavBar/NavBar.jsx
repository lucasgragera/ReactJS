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
                <NavLink to={'/categoria/todo'}>Todo</NavLink>
                <NavLink to={'/categoria/mancuernas'}>Mancuernas</NavLink>
                <NavLink to={'/categoria/maquinas'}>Maquinas</NavLink>
            </nav>

            <Link to='/cart'>
                <CartWidget />
            </Link>
        </div>
)}

export default NavBar;


    //         return (
    //     <Navbar >
    //         <Container>
    //             <Link to='/' >
    //                 TODO
    //             </Link>
    //             <Navbar.Toggle  />
    //             <Navbar.Collapse >
    //             <Nav >
    //                 <NavLink to="/categoria/ancuerna" className={ ({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} >Gorras</NavLink>
    //                 <NavLink to='/categoria/maquina' className={ ({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'}>Remeras</NavLink>                   
    //             </Nav>
    //             <Nav>                    
    //                 <Link className="" to='/cart' >
    //                     <CartWidget />
    //                 </Link>
                    
    //             </Nav>
    //             </Navbar.Collapse>
    //         </Container>
    //     </Navbar>
    // )



//         </div>
//     )
// }
// export default NavBar;
