
console.log(`Print 5 To 15 Numbers`);
let i = 5;
while (i<=15){
    console.log(i);
    i = i + 1;
}
console.log(`----------------------------------------------------------------------------`);
console.log(`Print numbers from 50 to 40 by decrementing 1`);
let num = 50
while(num >= 40) {
console.log(num);
num = num - 1
}
console.log(`----------------------------------------------------------------------------`);
console.log(`First 15 Odd Numbers`);
let num1 = 1
let count = 0
while(count < 15) {
    if (num1 % 2 != 0) {
        console.log(num1);
        count = count + 1
    }
    num1 = num1 + 1
}


console.log(`----------------------------------------------------------------------------`);
console.log(`First 10 Even Numbers`);
let num2 = 0;
let count1 = 0;
while(count1 < 10) {
    if (num2 % 2 == 0) {
        console.log(num2);
        count1 = count1 + 1
    }
    num2 = num2 + 1
}

console.log(`----------------------------------------------------------------------------`);
console.log(`Table of 5`);
let num3 = 5
let count2 = 0
while(count2 < 10) {
    console.log(num3);
    count2 = count2 + 1
    num3 = num3 + 5
}
console.log(`----------------------------------------------------------------------------`);
console.log(`Table of 10`);
let num4 = 10;
let count3 = 0
while(count3 < 10) {
    console.log(num4);
    count3 = count3 + 1
    num4 = num4 + 10
}
console.log(`----------------------------------------------------------------------------`);
console.log(`Print the table of 10 in reverse order`);
let num5 = 100
while(num5 >= 10) {
console.log(num5);
num5 = num5 - 10
}




