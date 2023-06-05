


'use strict'
const array = [11, 22, 33, 44, 55, 66];
console.log(array);
console.log(...array);

const array2 = [...array];

const person = {
    name: "Stew",
    age: 57,
    country: "US"
}

const person2 = {...person};
console.log(person2);

//rest parameters
function show(aadaharnum,role,...parameters){
    console.log(aadaharnum,role,parameters);
}
show(111111,"CEO",23,"elon","us")


function didvsion(num1,num2=1){

    console.log(num1/num2);

}
didvsion(7,0);
didvsion(10,5);
didvsion(7);


const student = {
    name: "Stew",
    age: 57,
    country: "US",
    pin : 557688,
    rollno:898,
    college: "COEP",
    marks: "90%",
   degree: "BE Cse",
}

//const rollno = student.rollno;
 //const college=student.college;
  //const degree=student.degree;
  // const country= student.country;

   const{rollno,age,ismarried=false } = student;//object distructuring

   console.log(rollno,age,ismarried);



   const array1 = [11, 22, 33];
   const[element1,element2,num1,num2=0]= array1;//array distructuring
   console.log(element1,element2,num1,num2);


