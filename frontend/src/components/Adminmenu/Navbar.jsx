import React from 'react';
import {Link} from 'react-router-dom';
import '../User/Menu/menustyle.css';
import Cart from '../../Pages/Cart/Cart';
function Navbar()
{
    return(

<div className='navi'>
         <nav  className='navi'>
        <li className='nav'><Link to="/admin">Orders</Link></li>
        <li className='nav'><Link to="/admin/menu">Menu</Link></li>
        <li className='nav'><Link to="/admin/about">About Us</Link></li>
        <li className='nav'><Link to="/admin/contact">Contact Us</Link></li>
        <li className='nav'><Link to="/admin/add">Add</Link></li>
    </nav>
    </div>
    );
}
export default Navbar;