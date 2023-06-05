

let person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true
}

const keys =  Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);
console.table(entries);

console.log("------------- Entry --------------------");
const entry = entries[2][1];
console.log(entry);

const entry1 = entries[3][0];
console.log(entry1);

const entry2 = entries[4][1];
console.log(entry2);
// console.log(entry[0]);

console.log("--------- Traversing an Object -----------");
for (const key in person) { // key = "height"
    if (Object.hasOwnProperty.call(person, key)) {
        const value = person[key];
        console.log(`${key}, ${value}`);
    }
}

