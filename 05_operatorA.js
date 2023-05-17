var string1 ="JavaScript";
 var string2 = "Google Chrome";
 var string3 = "Developer Smart";

var string4 = "I am Angular Developer";
 console.log(" 01] Length of word & its Square");
 
function squareOfWordLength(arg){  

        var result = arg.length;
       console.log("total character length :",result);
    
       var result1 = result * result;
       console.log("square of this :",result1);
    console.log("--------------------------------------------------------------");

    
}

squareOfWordLength("JavaScript");

squareOfWordLength("Google Chrome");

squareOfWordLength("DEveloper smart")





function stringHandsOn(){


    console.log("02] Devide And Multiplication");

    console.log("2.1]");
    var stringLength = string4.length;
    console.log(`Length of the string is =>${stringLength}`);
    var resultSplit = string4.split(" ");
    console.log(`total number of word---> ${resultSplit.length}`);
 
  
    var num1 = "22";
    var num2 = "4";
    var result = num1 / num2;
    console.log(`division-->${result}`);
    console.log("----------------------------------------------------------------");
    console.log("2.2]");

    var stringLength = string4.length;
    console.log(`Length of the string is =>${stringLength}`);
    var resultSplit = string4.split(" ");
    console.log(`total number of word---> ${resultSplit.length}`);
 
  
    var num1 = "22";
    var num2 = "4";
    var result = num1 * num2;
    console.log(`Multiplication-->${result}`);
    console.log("----------------------------------------------------------------");

}
stringHandsOn();