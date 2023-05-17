


var name1 = "   Hey you are doing good,Keep it up    ";

function stringHandsOn(){

console.log("------------------------------------------------------");

console.log("Given string as it is:",name1);

 var name1length = name1.length;

 console.log("total length:",name1length);

console.log("-----------------------Trim--------------------------------");

  var Trimmedname1 = name1.trim();
  var lengthAfterTrim = Trimmedname1.length;
  console.log("After remove Leading and Trailing Extra Spaces length is :",Trimmedname1,Trimmedname1.length);
  console.log("Total Number of Removed Extra Space count are total:",name1length-lengthAfterTrim);
 

var trimmedname1 = name1.trim();
var charAtZeroIndex =  trimmedname1.charAt(0);
var charAtLastIndex =  trimmedname1.charAt(trimmedname1.length-1);
console.log("First and Last character of string after trim are:", charAtZeroIndex,charAtLastIndex);

}
stringHandsOn();