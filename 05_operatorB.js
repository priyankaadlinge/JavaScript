

console.log(" -------------------Gretest Number---------------------------------");

var greaterNumber = function(num1,num2){

var result = num1>=num2 ? ` Given num(10,-10)--> ${num1} is greater`: ` Given num(800,899)--> ${num2} is greater`;

console.log( result);


}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(" -------------------Even Odd Number---------------------------------");

var isEvenOrOddNum = function (num){

var result = num%2 == 0 ? true : false;
return result;

}
var result = isEvenOrOddNum(29);
var res = (result == true) ? "29 is even" :"29 is odd";
console.log(`${res}`);
var result = isEvenOrOddNum(44);
var res = (result == true) ? "44 is even" :"44 is odd";
console.log(`${res}`);

var result = isEvenOrOddNum(0);
var res = (result == true) ? "0 is even" :"0 is odd";
console.log(`${res}`);
var result = isEvenOrOddNum(101);
var res = (result == true) ? "101 is even" :"101 is odd";
console.log(`${res}`);



console.log(" -------------------Even  or  Odd Length of Given Word---------------------------------");
var word1 = "Javascript";
var word2 = "Developer";
var word3 = "Google";
var word1length = word1.length;
var word2length = word2.length;
var word3length = word3.length;


var wordLength = function(){
    var result1 = word1length %2 == 0 ? `Length of the "${word1}" is ${word1length} and is Even Number` : `Length of the ${word1} is ${word1length} and is Odd Number`;
    console.log(`${result1}`);
    var result2 = word2length %2 == 0 ? `Length of the "${word2}" is ${word2length} and is Even Number` : `Length of the ${word2} is ${word2length} and is Odd Number`;
    console.log(`${result2}`);
    var result3 = word3length %2 == 0 ? `Length of the "${word3}" is ${word3length} and is Even Number` : `Length of the ${word3} is ${word3length} and is Odd Number`;
    console.log(`${result3}`);

}
wordLength("Javascript","Developer","Google");


