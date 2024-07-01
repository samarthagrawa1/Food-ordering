import React,{useState,useContext,useEffect} from 'react';
import profs from './profile';
import Card from './App';
import Navbar from './navbar';
import {Link} from 'react-router-dom';
import './homestyle.css';
import './style.css';
function crecard(pr){
    
    return(
       
    <Card name={pr.name}
        img={pr.imgurl}
        no={pr.no}
        mail={pr.mail}
        id={pr.id}
    />
    );
}

function Home(){
    
    function cle(){
        localStorage.clear();
    }
    return(
        <div>
        <Navbar />
        {profs.map(crecard)};
        <button onClick={cle}></button>     
    </div>
    );
}
export default Home;