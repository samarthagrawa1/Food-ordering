import React,{useState} from 'react';
import menuItems from '../../arrays/menuitems';
import categories from '../../arrays/categories';
import './menustyle.css';

export default function Additem(){
    const[meid,setid]=useState('');
    const[name,setname]=useState('');
    const[categ,setcateg]=useState('');
    const[rate,setrate]=useState('');
    function cre(item){
        return(
        <option value={item.name}
        >{item.name}</option>)
    }
    function cha(){
        var x=document.getElementById("my").value;
        console.log(x);
        setcateg(x);
    }
    
    const handlechange=async(e)=>{
        e.preventDefault();
        const newmenu={name,categ,rate,meid};
        const response=await fetch("/menu/add",{
            headers:{
                'Content-Type':'application/json'
            },
        method:"POST",
        body:JSON.stringify(newmenu)
    })
    if(response.ok)
    {
        setid('');
        setname('');
        setcateg('');
        setrate('');
        window.location.reload();
        alert("Item Added Successfully");
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
            <button>Submit</button>
        </form>

    )
    
}