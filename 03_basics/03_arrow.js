const user={
    username:'jhon',
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} welcome ot website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();

//console.log(this);
// this doesn't work inside the function
// function chai(){
//     let username="jhon";
//     console.log(this.username);
    
// }
// chai();


const chai=()=>{
    let username="sam";
}

const res=(num1,num2)=>{
return num1+num2;
}

//console.log(res(2,3));


const sub=(num1,num2)=> num1-num2;// implicit return possible if we write only one line 
//explicit return mea we are writing return keyword

//console.log(sub(4,3));


//if you want to return onject then need to wrap inside the ().
const addtwo=(num1,num2)=>({user:"peter"});
//console.log(addtwo(3,4));


//IIFE-Immediately invoked function expression


//names iffe
(function multiply(){
    console.log(3*10);
    
})();

((name)=>{
    console.log(`my name is ${name}`);
    
})("Tom");


