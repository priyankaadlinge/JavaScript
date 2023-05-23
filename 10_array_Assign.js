

console.log(`=========================================================Array=================================================================`);
var arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];

var zerothIndexValue = arrayFruits[0];
console.log(`1] First Element=====> ${zerothIndexValue}`);

let arrayLength = arrayFruits.length;
const lastElement = arrayFruits[arrayLength-1];
console.log(`1] Last  Element=====>${lastElement}`);

arrayFruits.unshift("papaya");
console.log(`2] Adding First Element papaya=====>${arrayFruits}`);


const spliceArray= arrayFruits.splice(4,1);
console.log(`3] Remove Mango=====>${arrayFruits}`);

const addLastElement = arrayFruits.push("pineapple");
console.log(`4] Adding last Element Pineapple=====>${arrayFruits}`);




 const insertElement = arrayFruits.splice(4,0,"Dragon")
console.log(`5] insert Element Dragon Fruit Before WaterMelon=====>${arrayFruits}`);


 const replace = arrayFruits.splice(2,1,"Kiwi")
console.log(`6] Replace Element Orange with kiwi =====>${arrayFruits}`);



const oneToFour = arrayFruits.slice(1,4);
console.log(`7] Index one To Index Four =====>${oneToFour}`);

var arrayFruits = ["Apple","Mango","Water Melon"];
let lengthOfArray = arrayFruits.length;
console.log(`8] Length of array is : ${lengthOfArray}`);