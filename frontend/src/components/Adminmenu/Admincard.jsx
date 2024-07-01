import React,{useState} from 'react';
import menuItems from '../../arrays/menuitems';
import Updateitem from './Update';
import './menustyle.css';
function Itemcard({item}){
    const {name,rate,meid}=item;
    console.log(name);
    const deletemenu=async()=>{
        let t=window.confirm("Do you want to delete the item ?");
       if(t)
       {
        const res=await fetch("/cart/order/"+meid,{
            method:"DELETE"
        })
        const json=await res.json();
        window.location.reload();
    }
    
    

    }
    
    return (
        <div className='menu-item'>
            <img className='menu-img' src='https://www.engelvoelkers.com/wp-content/uploads/2014/07/pizza-stock.jpg' alt='Menu Item'></img>
            <p className='menu-name'>{name}</p>
            <p className='menu-id'>ID: {meid}</p>
            <p className='menu-rate'>Rate: {rate}</p>
            <button className='menu-btn' id='Del' onClick={deletemenu}>DELETE</button>
            <button className='menu-btn' id='Upd'><a className='menu-link' href={'/admin/menu/update/' + meid}>UPDATE</a></button>
        </div>
    );
};
export default Itemcard;