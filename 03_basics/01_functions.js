
function sayMyName(){
    console.log("H");
    console.log("I");
    
}

//sayMyName();
// paramenters- when we declare function then the variables called as arguments
//arguments -when we call the function then the variables inside the (a,b) is called arguments

function addTwoNumbers(number1,number2){
    let res=number1+number2;
    return res;
}

const res=addTwoNumbers(3,4);

//console.log("RESULT:",res);

function loginUserMesage(username="sam"){
    return `${username} just loggedin`;
}

const message=loginUserMesage();
//console.log(message);


//using rest operator three dots (...)
function calculateCartPrice(val1,val2,...num1){
return num1;
}

console.log(calculateCartPrice(200,400,500,1000));

const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);

}

//handleObject(user);

//wqe also direct pass object in function
handleObject({
    username:"sam",
    price:300
});

const myNewArray=[200,400,600];
function returnSecondValue(getArray){
    return getArray[1];

}

//console.log(returnSecondValue(myNewArray));
//we can also pass direct array in function

console.log(returnSecondValue([10,20,30]));