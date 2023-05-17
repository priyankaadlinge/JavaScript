

console.log("<--------01.Two function with no argument and no returntype------->");


function myfunction(){
console.log("myfunction");
}
myfunction();

function myName(){
    console.log("myName");
}
myName();


console.log("<----------02.personal details------>");

 var name1 = "priyanka";
 var name2 = "Adlinge";
 var name3 = "Skn";

function personalDetails(firstName,lastName,collegeName){
console.log("My personal Details is");
console.log(" name:" , firstName, lastName);
console.log("collegeName:",collegeName);
}
personalDetails("priyanka","Adlinge","skn")


console.log("<-------03.Swap------->");
var name1 ="Virat";
var name2 = "Anushka";

var value1 = "1000";
 var value2 = "2000";

function swapValueDude(parameter1,parameter2){
    console.log("Before Swap...",parameter1, parameter2);
    var temp = parameter1;
    parameter1 = parameter2;
    parameter2 = temp;
    console.log("After Swap....", parameter1, parameter2);  
}
swapValueDude(name1, name2);
swapValueDude(value1, value2)



console.log("<------04.Add THree Values------>");

 var text1 = "hello";
 var text2 = "good";
 var text3 = "morning";
 var num1 = 10.23;
 var num2 = 600;
 var num3 = 40;

function addThreeValues(arg1 ,arg2,arg3){
    var result = arg1 + arg2 + arg3;
    console.log("addition is:",result);
}
 addThreeValues(10.23, 600,40)
 addThreeValues(text1,text2,text3)



 