


console.log(`=========================remove duplicate element in array==================`);
   const arr = [11,3,4,11,4,7,3];
   const seOfNum = new Set(arr);
   console.log(seOfNum);


console.log(`=========================Uppercase======================================`);
const input = 'How are you mate.'
const words = input.split(' ')
let result = []

for (const word of words) {
    const length = word.length - 1
    let str = ''
    for(let index = 0; index <= length; index++) {
        const char = word.charAt(index) 
        str = str.concat('', index === 0 || index === length ? char.toUpperCase() : char)
    }
   result.push(str)
}
console.log(result.join(' '))
