import React, { useState,useEffect } from 'react';
import orderItems from '../../arrays/orderitems';
import './orderstyle.css';
import Ordercard from './Ordercart';
function Order(){
    const[order,setorder]=useState(null);
    useEffect(()=>{
        const fetcho=async()=>{
    const response=await fetch('/cart/ordered',{
        method:"GET"
    })
    const orderItems_capital=await response.json();
    setorder(orderItems_capital)
        }
        fetcho();
    })
    function crea(item){
        return(<Ordercard key={item.id} item={item} />)
    }
    return(
        <div className='cats'>
           {order && order.map((crea))}
        </div>
    )

};
export default Order;