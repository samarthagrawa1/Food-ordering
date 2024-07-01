import React,{useState,useContext,useEffect} from 'react';
import profs from '../../components/profile';
import Card from '../../components/App';
import menuItems from '../../arrays/menuitems';
import Order from '../../components/Order/Order';
import {Link} from 'react-router-dom';
import Categorytype from '../../components/Adminmenu/Catadmin';
import '../Home/homestyle.css';
import Navbar from '../../components/Adminmenu/Navbar';
function crecard(pr){
    
    return(
       
    <Card name={pr.name}
        rate={pr.rate}
        meid={pr.meid}
        categ={pr.categ}
    />
    );
}

function Adminmenu(){
    
    return(
        <div>
         <Navbar />
    
        <Categorytype />
        {
            console.log(menuItems)
        }
    </div>
    );
}
export default Adminmenu;