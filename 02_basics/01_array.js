const myArray=[1,2,3,4];
//const newarray=myArray;
//console.log(newarray);
//newarray[0]=10;
// console.log(myArray);
// console.log(myArray);

const array_temp=new Array(10,20,30,40);
// console.log(array_temp);

myArray.push(10);
myArray.push(20);
//console.log(myArray);

//myArray.unshift(100);
//myArray.shift();
//console.log(myArray);
//console.log(myArray.includes(9));

const newArr=myArray.join();

console.log(newArr);
// SLICE AND SPLICE

const myn1=myArray.slice(1,3);

console.log(myn1);

const myn2=myArray.splice(1,3);// it will remove the portion(from 1 to 3) in the main array
console.log(myn2);

