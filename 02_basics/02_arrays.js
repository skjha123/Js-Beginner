const mavel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

//mavel_heros.push(dc_heros);
//console.log(mavel_heros);

const allheros=mavel_heros.concat(dc_heros);
//console.log(allheros);
//speread operator

const allherosnew=[...mavel_heros,...dc_heros];
//console.log(allherosnew);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

//console.log(Array.isArray("Histesh"));
//console.log(Array.from("Histesh"));
console.log(Array.from({name:"apple"}));//interesting prints enpty array

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));


