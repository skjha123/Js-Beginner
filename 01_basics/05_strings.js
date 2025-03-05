const name="shourya";
const repoCount=20;
//console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName=new String("shourya_01");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// //console.log(gameName.indexOf("h"));
const newstring=gameName.substring(0,4);
//console.log(newstring);

const anotherstring=gameName.slice(-3,8);
console.log(anotherstring);

const newstringOne="   Shourya     ";
console.log(newstringOne);

console.log(newstringOne.trim());
const url="https://shourya.com%20";
console.log(url.replace("%20","_"));
console.log(url.includes("shourya"));
console.log(gameName.split("_"));
