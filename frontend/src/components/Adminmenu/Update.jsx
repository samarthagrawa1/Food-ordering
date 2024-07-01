import React,{useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import './menustyle.css';
import categories from '../../arrays/categories';

export default function Updateitem(){
    const[meid,setid]=useState('');
    const[name,setname]=useState('');
    const[categ,setcateg]=useState('');
    const[rate,setrate]=useState('');
    const params=useParams();
    useEffect(()=>{
        getp();
    },[])
    const getp=async()=>{
        console.warn(params);
        let re=await fetch(`http://localhost:3000/admin/menu/update/${params.id}`,{
        headers:{
            'Content-Type':'application/json'
        },
        
    })
    re=await re.json();
    console.warn(re.name);
    setname(re.name);
    setcateg(re.categ);
    setrate(re.rate);
    setid(re.meid);
}
    function cre(item){
        return(
        <option value={item.name}
        >{item.name}</option>)
    }
    
    const handlechange=async(e)=>{
        e.preventDefault();
        const newmenu={name,categ,rate,meid};
        console.log("hi");
        const response=await fetch("/menu/"+newmenu.meid,{
            headers:{
                'Content-Type':'application/json'
            },
            method:"PATCH",
            body:JSON.stringify(newmenu),
    })
    if(response.ok)
    {
        setid('');
        setname('');
        setcateg('');
        setrate('');
        window.location.reload();
    }
    console.log(newmenu);
    console.log(JSON.stringify(newmenu))
    }
    
    return(
        <form onSubmit={handlechange}>
            <input type="text" onChange={(e)=>{setid(e.target.value)}} value={meid} placeholder='ID'></input>
            <input type="text" onChange={(e)=>{setname(e.target.value)}} value={name} placeholder='Name'></input>
            <label for="cate" className='cate' value={categ} placeholder='Category'>
        <select id="my" onChange={(e)=>{setcateg(e.target.value)}}>
        <option> Select</option>
        {categories.map((cre))}</select>
    </label>
            <input type="text" onChange={(e)=>{setrate(e.target.value)}} value={rate} placeholder='Rate'></input>
            <button >Submit</button>
        </form>

    )
    
}