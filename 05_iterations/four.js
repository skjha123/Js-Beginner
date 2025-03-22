const coding=["js","ruby","java","python"];


//for Each-uses call back function
// coding.forEach( function (item) {
//     console.log(item);
    
// });

// coding .forEach((item)=>{
//     console.log(item);
    
// })


function printMe(item){
    console.log(item);
    
}

//coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
//    console.log(item,index,arr);
    
})


const mobileobj=[
    {
        mobilename:"Iphone",
        price:150000,
    },
    {
        mobilename:"samsung",
        price:"250000"
    },
    {
        mobilename:"realme",
        price:"30000"
    }
];

mobileobj.forEach((item)=>{
console.log(item.mobilename);

});

