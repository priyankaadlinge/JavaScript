// 5*4*3*2*1
let factorial = 1;
for (let index = 5; index>=1; index--) {
    factorial = factorial*index; //1*5 
    
}
console.log(`factorial ${factorial}`);

// factorial 10
let factorial1 = 1;
for (let index = 10; index>=1; index--) {
    factorial1 = factorial1*index; //1*5 
    
}
console.log(`factorial1 ${factorial1}`);


//using function
function factorialNum(num){
if (num==0) {
    console.log(`factorial of zero is 1`);
    return;
}
    let factorial = 1;
for (let index = num; index>=1; index--) {
    factorial = factorial*index; //1*5 
    
}
console.log(`factorial ${factorial}`);
}
factorialNum(4);
factorialNum(6);
factorialNum(0);