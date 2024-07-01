import React,{useState,useContext,useEffect} from 'react';
import profs from '../../components/profile';
import Card from '../../components/App';
import menuItems from '../../arrays/menuitems';
import Order from '../../components/Order/Order';
import {Link} from 'react-router-dom';
import { auth } from '../../context/context';
import Categorytype from '../../components/User/Menu/Categorytype';
import './homestyle.css';
import Navbar from '../../components/Navbar/Navbar';
function crecard(pr){
    
    return(
       
    <Card name={pr.name}
        rate={pr.rate}
        meid={pr.meid}
        categ={pr.categ}
    />
    );
}

function Home(){
    const b=useContext(auth)
    console.log(b.email);

    function cle(){
        localStorage.clear();
    }
    
    return(
        <div>
         <Navbar />
    
        <Categorytype />
        {
            console.log(menuItems)
        }
        <button onClick={cle}></button>     
    </div>
    );
}
export default Home;