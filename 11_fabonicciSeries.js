




var count = 25;
var fibArray= [0,1];

for (let index = 2; index<count;index++){
    fibArray[index] = fibArray[index-1]+fibArray[index-2];


}
console.log(`-----------------------------------------------------------------------------------------------`);
console.log(`Fabonicci Series is ===>${fibArray}`);