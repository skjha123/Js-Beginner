const userEmail=[];
if(userEmail){
    console.log("got user email");

    
}
else{
    console.log(`Don't have user email`);
    
}

//falsy values

/*
flase,0,-0,BigInt,0n,"",null,undefined,Nan
*/ 


//trythy values

/*
"0",'false'," ",[],{},function(){}
*/

/*
if(userEmail.length===0){
    console.log("Array is empty");
    
}
    */

/*
const emptyObj={};
if(Object.keys(emptyObj).length===0){
console.log("Object is empty")
}

*/


// Gives true result
//flase==0
//flase==''
//0==''


//Nullish Coalescing Operator (??): null undefined

let vla1;
val1=5?? 10;
console.log(val1);

let val2;
val2=undefined??15;
console.log(val2);


val2=null??10??20;
console.log(val2);

// Terniary operator

//condition ?true:flase

const iceTeaPrice=100;
iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80");
;
