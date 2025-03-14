//const tinderUser=new  Object();
tinderUser={};
//console.log(tinderUser);

tinderUser.id="123abc";
tinderUser.name="Sam";
tinderUser.isloggedIn=false;
//console.log(tinderUser);

const regularUser={

};

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

//const obj3={obj1,obj2};

// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

const obj3={...obj1,...obj2};
//console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//convets every key values into array

console.log(tinderUser.hasOwnProperty("isloggedIn"));




