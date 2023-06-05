



var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
const arrayLength = arrayNumbers.length;
console.log(`Total Length of element: ${arrayLength}`);

const FirstElement = arrayNumbers[0];
console.log(`First Element :${FirstElement}`);

let arrayLength1 = arrayNumbers.length;
const lastElement = arrayNumbers[arrayLength1-1]
console.log(`Last Element:${lastElement}`);

const lastthree = arrayNumbers[arrayLength1-3]
console.log(`Third Last Element: ${lastthree}`);


for (const index in arrayNumbers) {
    if (arrayNumbers[index]%2==0) {
        
        console.log(`Even Num :${arrayNumbers[index]}`);
    }

    }
console.log(`--------------------------------------------------------------------------------------------------`);
    

for (const index in arrayNumbers) {
    if (arrayNumbers[index]%2!=0) {
        
        console.log(`Odd Num :${arrayNumbers[index]}`);
    }
    
    }
    console.log(`--------------------------------------------------------------------------------------------------`);


   
for (const index in arrayNumbers) {
    if (index%2==0) {
        
        console.log(`Even Position Num:${arrayNumbers[index]}`);
   
    }
    }
    console.log(`--------------------------------------------------------------------------------------------------`);
    


    
    
for (const index in arrayNumbers) {
    if (index%2!=0) {
        
        console.log(`Odd Position Num:${arrayNumbers[index]}`);
   
    }
    }

console.log(`--------------------------------------------------------------------------------------------------`);


let sumOfEven = 0;
for(const index in arrayNumbers){
if (index%2==0) {
    
    sumOfEven = sumOfEven+arrayNumbers[index];
}
}
    console.log(`sum of even numbers: ${sumOfEven}`);



    console.log(`--------------------------------------------------------------------------------------------------`);

let sumOfOdd = 0;
for(const index in arrayNumbers){
if (index%2!=0) {
    
    sumOfOdd = sumOfOdd+arrayNumbers[index];
}
}
    console.log(`sum of odd numbers: ${sumOfOdd}`);

    
        console.log(`--------------------------------------------------------------------------------------------------`);

        
        let sum = 0;
        for (const num of arrayNumbers) {
        sum = sum + num;
        }
        console.log('Sum of all Numbers in Given Array: ', sum);

        console.log(`--------------------------------------------------------------------------------------------------`);

        
            for (const num of arrayNumbers) {
              if(num%5 == 0) {
                 console.log('Number is multiple of 5===>', num);
              }
            }
            
            console.log(`--------------------------------------------------------------------------------------------------`);
        
         const isAvailable= arrayNumbers.includes(115);
         const isAvailable2 = arrayNumbers.includes(23);
        console.log( `Is Num 115 is available : ${isAvailable}`);
        console.log( `Is Num 23 is available : ${isAvailable2}`);

        console.log(`--------------------------------------------------------------------------------------------------`);

            
            const insertElement = arrayNumbers.splice(3,0,55,66);
            console.log(`Insert Numbers Before index 3 :${arrayNumbers}`);
            console.log(`--------------------------------------------------------------------------------------------------`);

            const deleteElement = arrayNumbers.splice(4,3);
            console.log(`Delete 3 Element Starting from index 4: ${arrayNumbers}`);
            console.log(`--------------------------------------------------------------------------------------------------`);
