import React from 'react';
import menuItems from '../../../arrays/menuitems';
import Itemcard from './Itemcard';
import './menustyle.css';
function Menu({category}){
    const {name}=category;
    console.log(name);
    function crea(item){
        return(name===item.categ && <Itemcard key={item.id} item={item} />)
    }
    return(
        <div className='cate'>
        <h1>{name}</h1>
           {menuItems && menuItems.map((crea))}
        </div>
    )

};
export default Menu;