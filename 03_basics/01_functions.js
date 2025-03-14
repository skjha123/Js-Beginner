
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
console.log(message);


