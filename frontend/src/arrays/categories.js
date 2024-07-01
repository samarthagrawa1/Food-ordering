const categories_capital=[
    {
        id:'1',
        name:"PANEER"
    },
    {
        id:'2',
        name:"DAL"
    },
    {
        id:'3',
        name:'Beverages'
    },
    {
        id:'4',
        name:'Chineese'
    },
    {
        id:'5',
        name:'Starters'
    },
];
function sentenceCase (str) {
    if ((str===null) || (str===''))
        return false;
    else
    str = str.toString();
     
    return str.replace(/\w\S*/g,
    function(txt){return txt.charAt(0).toUpperCase() +
        txt.substr(1).toLowerCase();});
    }
const categories=categories_capital;
categories_capital.forEach((item,index)=>{categories[index].name=sentenceCase(item.name)})
export default categories;