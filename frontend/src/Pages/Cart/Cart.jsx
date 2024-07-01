import React,{useState,useContext} from 'react';
import menuItems from '../../arrays/menuitems';
import './cartstyle.css';
import { auth } from '../../context/context';
import Navbar from '../../components/Navbar/Navbar';
import Login from '../Login/Login';
function Cart(){
    var t=0;
    let j=0;
    let carts=[{
        "id":"",
        "name":"",
        "rate":"",
        "amount":"",
        "total":""
    },]
    let sum=0;
    while(localStorage.key(j)!=null )
    {
        if(localStorage.key(j)!=="data")
        {
        var bird=menuItems.filter(f => f.meid===localStorage.key(j));
        let cart={
            "id":bird[0].meid,
            "name":bird[0].name,
            "rate":bird[0].rate,
        "amount":localStorage.getItem(localStorage.key(j)),
        "total":String(bird[0].rate*localStorage.getItem(localStorage.key(j))),
        }
        sum=sum+bird[0].rate*localStorage.getItem(localStorage.key(j));
       carts.push(cart);
    }
       j++;
    };
    let c={
        "id":"",
        "name":"",
        "rate":"",
        "amount":"",
        "total":""
    }
    carts.push(c);
    const[finalcart,setCart]=useState(carts);
    function Cartcard(item){
        const[count,setcount]=useState(()=>{
            let j=0;
            while(localStorage.key(j)!=null)
        {
            if(localStorage.key(j)!=="data")
        {
            if(localStorage.key(j)===item.id)
            {
                return(localStorage.getItem(localStorage.key(j)));
            } 
        }
            j++;
        }
    })
        console.log(carts);
        
        
        console.log(finalcart);
        const handleChange =(it, d)=>{
            setcount(Number(count)+d);
            let j=0;
            if(count===1 && d===-1)
            {
                let j=0;
            while(localStorage.key(j)!=null)
        {
            if(localStorage.key(j)!=="data")
        {
            if(localStorage.key(j)===item.id)
            {
                localStorage.removeItem(localStorage.key(j));
            } 
        }
            j++;
        }
                let ind = finalcart.findIndex((data)=>data.id===it.id);
                setCart((prevValue)=>{
                    console.log(prevValue[ind]);
                    prevValue.slice(ind,ind);
                    window.location.reload();
                    return [...prevValue ];
                console.log(prevValue)})
                    

            }
            else{
        while(localStorage.key(j)!=null)
        {
            if(localStorage.key(j)!=="data")
            {
            if(localStorage.key(j)===item.id)
            {
                localStorage.setItem(localStorage.key(j),Number(localStorage.getItem(localStorage.key(j)))+d);
            } 
        }
            j++;
        }
        console.log(finalcart);
            let ind = finalcart.findIndex((data)=>data.id===it.id);
            console.log(ind);
            setCart((prevValue)=>{
                console.log(prevValue[ind]);
                prevValue[ind].amount =String(Number(prevValue[ind].amount)+Number(d));
                prevValue[ind].total =String(Number(prevValue[ind].rate)*Number(prevValue[ind].amount));
                if (prevValue[ind].amount === 0) prevValue[ind].amount = 1;
                return [...prevValue ];
                
        })}
        
        console.log(finalcart);}
        
        if(item.name==="")
        {}
        else{
            return (
                <div className='cart-item'>
                    <div className='cart-item-details'>
                        <div className='cart-item-name'>{item.name}</div>
                        <div className='cart-item-rate'>Rs. {item.rate}</div>
                    </div>
                    <div className='cart-item-controls'>
                        <button className='cart-btn' onClick={() => handleChange(item, -1)}>-</button>
                        <div className='cart-item-count'>{count}</div>
                        <button className='cart-btn' onClick={() => handleChange(item, 1)}>+</button>
                    </div>
                    <div className='cart-item-total'>Total: Rs. {item.total}</div>
                </div>
            );
        }
    
    }
    const handlesubmit=async()=>{
        let t=window.confirm("Do you want to place the order ?");
       if(t)
       {
        const ccart=finalcart.filter(t=>t.id!=='');
        await fetch("/cart",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                order_data:ccart,
                price:sum,
                mail:localStorage.getItem("data")
            })

        })
        localStorage.clear();
        window.location.reload();
        alert("Order placed Successfully");
    }
    }
    return (
        <div className='cart-container'>
            <Navbar />
            <div className='cart-items'>
            {finalcart && finalcart.map(Cartcard)}
            </div>
            {console.log(carts)}
            <div className='total-amount'>Total Amount: Rs. {sum}</div>
            <button className='order-button' onClick={handlesubmit}>Order</button>
        </div>
    );
}
export default Cart;
