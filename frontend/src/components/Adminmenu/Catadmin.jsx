import React from 'react';
import categories from '../../arrays/categories';
import Menu from './Adminmenu';
import Additem from './Additem';
function Categorytype()
{
    return(
        <div>
        <h1>Categories</h1>
            {categories.map((category)=><Menu key={category.id} category ={category} />)}
        </div>
    )
};
export default Categorytype;