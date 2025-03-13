//Object.create();
//by default system treat key as string example "name";

const mysym=Symbol("key1");
const Jsuser={
    name:"Jhon",
    "full name":"Jhon kumar",
    "email":"jhon@google.com",
    [mysym]:"new key using symbol",
    age:23,
    location:"India",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Tuesday","Saturday"]
    
};

// console.log(Jsuser.email);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mysym]);

Jsuser.email="jhon@yahoo.com";
//Object.freeze(Jsuser);// use to freeze the object mean not able to change the conntent

Jsuser.email="jhon@wipro.com";//will not get error but not able to change the content 

// console.log(Jsuser.email);
// console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello js user");
};
Jsuser.greetingtwo=function(){
    console.log(`Hello js user,${this.name}`);
};
Jsuser.greeting();
Jsuser.greetingtwo();
