import React,{useState} from 'react';
import Om from './Oi';
function Ordercard({item}){
    const {orderdata,price,_id}=item;
    const deleteitem=async()=>{
        let t=window.confirm("Do you want to delete the order ?");
       if(t)
       {
        const response=await fetch("/cart/ordered/"+_id,{
        method:"DELETE"
    })
    
    const json=await response.json();
    if(response.ok)
    {
        console.log("Deleted");
    }}
    }
    
    return(
        <div className='cat'>
        <p className='nam'>{orderdata.map((oi)=>{
            return<Om oi={oi} />
        })}</p>
        <p className='nam'>{price}</p>
        <button onClick={deleteitem}>DELETE</button>
        </div>
    );
}
export default Ordercard;