const myNums=[1,2,3,4,5,6,7,8,9,10];
//const newnums=myNums.map((nums)=>nums+10);
//console.log(newnums);

//CHAINING

/*

 we can use 2,3 or more in smae thing
 in next chain forst chan value will be passed
*/


const newNums=myNums.map((num)=>{return num*10}).map((num)=>{return num+1}).filter((num)=>{
    return num>40;
});
console.log(newNums);
