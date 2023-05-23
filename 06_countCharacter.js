console.log("----------------------------------Count the Total Num of character in String--------------------------------------------");

function countCharA(word){
  let count = 0;
for(index = 0; index<word.length; index++){
let char = word.charAt(index);   
if(char=="a" || char=="A" ){

count++;
}

}
return count;
}
// console.log(`Count total vowels: ${count}`);

console.log(`1] Given string is: "I AM Learning JavaScript, The Language of internet"`);
let countTotalCharOne = countCharA(`"I AM Learning JavaScript, The Language of internet"`);
console.log(`Count the Total Num of character ['a' or 'A'] in string: ${countTotalCharOne}`);
console.log(`---------------------------------------------------------------------------------------------------------------------------`);
console.log(`2] Given string is: "My favourite movie is LAggAn"`);
let countTotalCharTwo = countCharA(`"My favourite movie is LAggAn"`);
console.log(`Count the Total Num of character ['a' or 'A'] in string : ${countTotalCharTwo}`);
