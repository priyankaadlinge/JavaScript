const arrayNums = [20,3,4,56,90,400,49];

const clonedArray = arrayNums;
console.log(`--------------------------- $ Shallow Clone $ --------------------------------`);
console.log(`Given Array  ==> `,arrayNums);
console.log(`Cloned Array ==> `,clonedArray);

arrayNums.push(55,66);
console.log(`After Update value ==> `,arrayNums);
const clonedArray1 = [...arrayNums];
console.log(`--------------------------- $ deep Clone Using Spread Operator $ --------------------------------`);
console.log(`Given Array  ==> `,clonedArray1);
console.log(`Cloned Array ==> `,clonedArray1);

arrayNums.push(10,25);
console.log(`After Update Value ==> `,arrayNums);

const arrayEven = [2,30,14,8];
console.log(`--------------------------- $ Merged Array Using Spread Operator $ --------------------------------`);
const concatArray = [...arrayNums.concat(...arrayEven)];
console.log(`Given Array  ==> `,clonedArray1);
console.log(`Merged Array ==> `,concatArray);

const employee_info = {
    emp_id:27,
    emp_name:"john Doe",
    salary:{
        july_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR",
    },
    address:{
        locality:{
            colony:"OM Vrindavan Society,",
            street:"Kanch pokli, 431202,",
        },
        city: "Mumbai,",
        state: "Maharashtra",
        country:"india",
    },

    mobiles : ["+91- 7793633868","1800-4576 32","+91-9065432788"]
}
console.log(`------------------------------- $ Create Object Employee_Info $ ----------------------------------------------`);
console.log(`Employee Details ==> `,employee_info);
console.log(`------------------------------------------------------------------------------------------------------------`);
//console.log(`locality=====>`,employee_info.address.locality.colony,employee_info.address.locality.street,employee_info.address.city,employee_info.address.country);
console.table(employee_info.address);
console.log(`------------------------------------------------------------------------------------------------------------`);
console.log(`Mobiles ==> `,employee_info.mobiles);

const deepCloneObject = JSON.parse(JSON.stringify(employee_info));


console.log(`------------------------------------------------------------------------------------------------------------`);
console.table(employee_info.salary);

 deepCloneObject.salary.july_month = "80,0000INR";

console.log(`Updated Salary ==> `,deepCloneObject.salary.july_month);

deepCloneObject.address.country = "United Kingdom";

console.log(`Updated Country ==> `,deepCloneObject.address.country);


