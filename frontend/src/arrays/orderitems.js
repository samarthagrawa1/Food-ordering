import React,{useState,useEffect, useContext} from 'react'

const response=await fetch('/cart/ordered',{
    method:"GET"
})
const orderItems_capital=await response.json();
const orderItems=orderItems_capital;


export default orderItems;