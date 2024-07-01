import React from 'react';
import { useState,useContext } from 'react';
import {Link,useNavigate} from "react-router-dom";
import './Login.css';
export default function Login()
{
    const[email,setmail]=useState('');
    const[password,setpass]=useState('');
    const history=useNavigate();
    const sub=async(e)=>{
        e.preventDefault();
        const newuser={email,password};
        const response=await fetch("/login",{
            headers:{
                'Content-Type':'application/json'
            },
        method:"POST",
        body:JSON.stringify(newuser)
    })
    console.log(newuser);
    console.log(JSON.stringify(newuser))
    if(response.ok)
    {
        if(email!="admin@nit.com"){
            localStorage.setItem("data",email)
        history('/home')
        }
        else{
            
            history('/admin')
        }
    }
    else{
        alert("Details not matched");
    }
    }
    
    return(
        <div>
        <form onSubmit={sub}>
            <input type='email' value={email} placeholder='email' onChange={(e)=>{setmail(e.target.value)}}></input>
            <input type='password' value={password} placeholder='password' onChange={(e)=>{setpass(e.target.value)}}></input>
            <button>Login</button>
        </form>
        </div>
        
    )
}