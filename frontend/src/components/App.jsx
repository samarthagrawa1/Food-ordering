import React,{useState} from 'react';
import './style.css';
import profs from './profile';
import menuItems from '../arrays/menuitems';
import { json } from 'react-router-dom';



function Card(props){
    
    function cart(){
        set(count+1);
        localStorage.setItem(props.meid,count+1);
        let j=0;
        var sum=0;
        
        while(localStorage.key(j)!=null)
        {
            var b=localStorage.key(j);
            console.log(b);
        var bird=menuItems.filter(t => t.meid===localStorage.key(j));
    console.log((bird[0].rate)*localStorage.getItem(localStorage.key(j)));
    sum=sum+(bird[0].rate)*localStorage.getItem(localStorage.key(j));
    console.log(localStorage.getItem(localStorage.key(j)));
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
            localStorage.removeItem(props.meid)
        }
        else{
        localStorage.setItem(props.meid,count-1)
        }
        let j=0;
        var sum=0;
        while(localStorage.key(j)!=null)
        {
        var bird=menuItems.filter(f => f.meid===localStorage.key(j));
        console.log((bird[0].rate)*localStorage.getItem(localStorage.key(j)));
        sum=sum+(bird[0].rate)*localStorage.getItem(localStorage.key(j));
        console.log(localStorage.getItem(localStorage.key(j)));
        j++;
            }
            console.log(sum);
        
    }
    
    const [count,set]=useState(0);
    return(
        <div className='car'>
        <h2 className='noi'>
            {props.name}
        </h2>
        <p className='nom'>{props.categ}</p>
     
            <p className='nom'>{props.rate}</p>
            <p className='nom'>{props.meid}</p>
            <h1>{count}</h1>
            
            <button onClick={cart}>{cart}</button>
            <button onClick={cart1}>{cart1}</button>
        </div>
    );
}
export default Card;