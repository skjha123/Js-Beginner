// Primitive

/*String,NUmber,Boolean,null,undefined,Symbol,BigInt
*/

const score=100;
const id=Symbol('123');
const anotherId=Symbol("123");
//console.log(id==anotherId);
const bignumber=244545464645654645645657n;

//Non primitive datatypes
const heros=["shaktiman","spiderman","ironman"];
let obj={
name:"shourya",
age:"25",
};

const f=function(){
    console.log("Hello world");
    
}
console.log(typeof bignumber);
console.log(typeof heros);
console.log(typeof f);


//Refrence type(Non primitive)

/*
Array,Objects,Functions
*/

