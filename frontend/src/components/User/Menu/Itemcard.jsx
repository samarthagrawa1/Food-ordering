import React,{useState} from 'react';
import menuItems from '../../../arrays/menuitems';
import './menustyle.css';
function Itemcard({item}){
    const {name,rate,meid}=item;
    console.log(name);
    function cart(){
        set(count+1);
        localStorage.setItem(meid,count+1);
        let j=0;
        var sum=0;
        
        while(localStorage.key(j)!=null)
        {
            if(localStorage.key(j)!=="data")
            {
            var b=localStorage.key(j);
            console.log(b);
        var bird=menuItems.filter(t => t.meid===localStorage.key(j));
    console.log((bird[0].rate)*localStorage.getItem(localStorage.key(j)));
    sum=sum+(bird[0].rate)*localStorage.getItem(localStorage.key(j));
    console.log(localStorage.getItem(localStorage.key(j)));
            }
    j++;
        }
       console.log(sum);
        
    }
    function cart1(){
        if(count>0)
        {
        set(count-1);
        }
        if(count-1<=0)
        {
            localStorage.removeItem(meid)
        }
        else{
        localStorage.setItem(meid,count-1)
        }
        let j=0;
        var sum=0;
        while(localStorage.key(j)!=null)
        {
            if(localStorage.key(j)!=="data")
            {
        var bird=menuItems.filter(f => f.meid===localStorage.key(j));
        console.log((bird[0].rate)*localStorage.getItem(localStorage.key(j)));
        sum=sum+(bird[0].rate)*localStorage.getItem(localStorage.key(j));
        console.log(localStorage.getItem(localStorage.key(j)));
            }
        j++;
            }
            console.log(sum);
        
    }
    
    const [count,set]=useState(()=>{
        let j=0;
        while(localStorage.key(j)!=null )
    {
        if(localStorage.key(j)!=="data")
            {
        if(localStorage.key(j)===item.meid)
        {
            return(localStorage.getItem(localStorage.key(j)));
        } 
    }
        j++;
    }
return(0);});
return (
    <div className='menu-item'>
        <img className='menu-img' src='https://www.engelvoelkers.com/wp-content/uploads/2014/07/pizza-stock.jpg' alt='Menu Item'></img>
        <p className='menu-name'>{name}</p>
        <p className='menu-rate'>Rate: {rate}</p>
        <div className='menu-controls'>
            <button className='menu-btn' onClick={cart1}>-</button>
            <h1 className='menu-count'>{count}</h1>
            <button className='menu-btn' onClick={cart}>+</button>
        </div>
    </div>
);
};
export default Itemcard;