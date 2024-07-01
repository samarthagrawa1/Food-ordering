import React,{useState} from 'react';
export default function Register()
{
    
        const[email,setmail]=useState('');
    const[password,setpass]=useState('');
    const[nam,setname]=useState('');
    const[number,setnum]=useState('');
    
    const Sub=async(e)=>{
        e.preventDefault();
        const newuser={email,password,nam,number};
        const response=await fetch("/user/add",{
            headers:{
                'Content-Type':'application/json'
            },
        method:"POST",
        body:JSON.stringify(newuser)
    })
    if(response.ok)
    {
        setmail('');
        setpass('');
        setname('');
        setnum('');
        
    }
    console.log(newuser);
    console.log(JSON.stringify(newuser))
    }
    return(
        <form onSubmit={Sub}>
            <input type='email' value={email} placeholder='email' onChange={(e)=>{setmail(e.target.value)}}></input>
            <input type='password' value={password} placeholder='password' onChange={(e)=>{setpass(e.target.value)}}></input>
            <input type='text' value={nam} placeholder='name' onChange={(e)=>{setname(e.target.value)}}></input>
            <input type='text' value={number} placeholder='number' onChange={(e)=>{setnum(e.target.value)}}></input>
            
            <button>Register</button>
        </form>
    )
}