let myDate=new Date();
//console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);
//let mycreatedDate=new Date(2023,0,23);
let mycreatedDate=new Date("01-14-2023");
//console.log(mycreatedDate.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString("default",{
    weekday:'long',
    //timeZone:''
});









