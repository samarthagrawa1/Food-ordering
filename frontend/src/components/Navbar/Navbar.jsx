import React from 'react';
import {Link} from 'react-router-dom';
import '../User/Menu/menustyle.css';
import Cart from '../../Pages/Cart/Cart';
function Navbar()
{
    return(

<div className='navi'>
         <nav  className='navi'>
        <li className='nav'><Link to="/home">Home</Link></li>
        <li className='nav'><Link to="/services">Services</Link></li>
        <li className='nav'><Link to="/about">About Us</Link></li>
        <li className='nav'><Link to="/contact">Contact Us</Link></li>
        <li className='nav' id='Cart'><Link id='Cart' to="/cart" onClick={Cart}>Cart</Link></li>
    </nav>
    </div>
    );
}
export default Navbar;