

console.log(`=======================clone object bankSbi and bankLocation=================================`);
let bankSbi ={
bankName : "State Bank Of India",
 location : "Moshi",
 ifsc : "fgh57798098",
 accuntNumber : 34567897654321,
 interestRate :"6.7%",

}
let bankLocation = {
    street : "ravet",
city : "pune",
pin :"412101",
}
let rateOfInterest = {

    homeLoanInterrest : "6.76%",
    personalLoanInterest : "8.76%",
    dueInterest : "9.56%",
}
let sbiDetails ={

}

Object.assign(bankSbi,bankLocation);
console.table(bankSbi);
console.log(`===============Merge banksbi ,banklocation,rateofinterrest into sbidetails===========================`);
 Object.assign(sbiDetails,bankSbi,bankLocation,rateOfInterest)
console.table(sbiDetails);

console.log(`=======================Traverse the merged object in for in Loop=================================`);

for (const key in sbiDetails) {
    if (sbiDetails.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`${key}, ${element}`);
        
    }
}
