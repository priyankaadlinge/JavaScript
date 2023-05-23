



console.log(`=======================================Factorial Number==================================`);
var isFactorialNum = function isFactorialNum(num){
if (num==null||num==undefined ||isNaN(num)){
    console.log(`${num} is not valid factorial num........`);
 return;
} 
let factorial = 1;
for (let index = num; index>=1; index--) {
factorial = factorial*index; //1*5 

}
console.log(`factorial of ${num}===> ${factorial}`);
    
}
isFactorialNum(5);
isFactorialNum(3);
isFactorialNum(9);
isFactorialNum(8);
isFactorialNum(null);
isFactorialNum(undefined);
isFactorialNum(NaN);
isFactorialNum(0)