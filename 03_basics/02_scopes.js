var c=300;

let a=200;
//inside {} block is known as block score

//outside the bloc is known as global scope
if(true){
    let a=10;
    const b=20;
    var c=30;
}


// console.log(c);

// CLOSURE-   Inner function can able to access the variables of outer function 
function One(){
    const username="Jhon";

    function two(){
        const website="youtube";
        //console.log(username);
        
    }
    //console.log(website);
    two();
}

One();


if(true){
    const username="jhon";
    if(username==="jhon"){
        const website ="youtube";
        //console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);

//++++++++++++++++interesting+++++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num+1;
}

// addone(5);


//expression and hoisting(way to declare function and calling)
const addTwo=function(num){
    return num+2;

}
addTwo(5);
