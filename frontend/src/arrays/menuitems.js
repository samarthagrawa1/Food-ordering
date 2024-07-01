import React,{useState,useEffect, useContext} from 'react'
function sentenceCase (str) {
    if ((str===null) || (str===''))
        return false;
    else
    str = str.toString();
     
    return str.replace(/\w\S*/g,
    function(txt){return txt.charAt(0).toUpperCase() +
        txt.substr(1).toLowerCase();});
    }
const response=await fetch('/menuitem',{
    method:"GET"
})
const menuItems_capital=await response.json();
const menuItems=menuItems_capital;
menuItems_capital.forEach((item,index)=>{menuItems[index].name=sentenceCase(item.name); })

export default menuItems;