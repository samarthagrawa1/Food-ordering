import React from 'react';
import './orderstyle.css';
export default function Om({oi}){
    return(
        <div>
        <div className='or' id='nam'>{oi.name} </div>
        <div className='or'>{oi.rate}</div>
        <div className='or'>{oi.amount}</div>
        <div className='or'>{oi.total} </div>
        </div>
    );
}