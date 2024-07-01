import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
function About(){
    let j=0;
    while(localStorage.key(j)!=null)
    {
    if(localStorage.key(j)!="data")
    {
        console.log(localStorage.getItem(localStorage.key(j)))
    }
    j++;
    }
    return(
    <div>
    <Navbar />
        This is About page
    </div>
    );
}
export default About;