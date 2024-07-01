import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';
import {Link} from 'react-router-dom';
import Admin from './Pages/Admin/Admin';
import Adminmenu from './Pages/Admin/Adminmenu';
import Update from './components/Adminmenu/Update';
import Addpage from './components/Adminmenu/Addpage';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
export default function App()
{
    let routes;
    routes=(
        <>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/services' element={<Services />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/admin' element={<Admin />} />
            <Route exact path='/admin/menu' element={<Adminmenu />} />
            <Route exact path='/admin/contact' element={<Admin />} />
            <Route exact path='/admin/menu/update/:id' element={<Update />} />
            <Route exact path='/admin/add' element={<Addpage />} />
        </>
    )
    return(
        <BrowserRouter>
           
    <Routes>
                {routes}
            </Routes>
        </BrowserRouter>
    );
}