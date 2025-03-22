// for of

//[{},{},{}]

const arr=[1,2,3,4,5];
for (const num of arr) {
    //console.log(num);
}

const message="Hello world!";

for (const greet of message) {
    //console.log(`each characeter is ${greet}`);
    
    
}

// maps
/*  1.unique values ,
    2.remember the order of keys
    3.
    4.
*/
const map=new Map();
map.set('IN',"Indian");
map.set("USA","unted states of america");
map.set("FR","France");
//console.log(map);

for (const [key,vlaue] of map) {
    console.log(key,':-',vlaue);
    
    
}


// in case of object it is not iteratable
/*
const myobj={
    game1:"IGI",
    game2:"spiderman"
}
for (const [gname] of myobj) {
    console.log(gname);
    
}
    */