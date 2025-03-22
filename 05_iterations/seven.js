//reduce method
const mynums=[1,2,3];

const res=mynums.reduce(function (acc,curr_val){
    //console.log(`acc =${acc} and currval=${curr_val}`);
    
return acc+curr_val;
},1);
//console.log(res);

const shoppingCart=[{
    itemname:"js course",
    itemprice:1000
},
{
    itemname:"mobile dev course",
    itemprice:2000
},
{
    itemname:"data scientist",
    itemprice:3000
}
];

const result=shoppingCart.reduce((acc,item)=>{
     return acc+item.itemprice;
},0);

console.log(result);
