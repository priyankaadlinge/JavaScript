var square = function (num1){
    var square1 = num1*num1;
    console.log(`Square of given number is => ${square1}`);
}
square(5);
square(6);
square(25);
square(100);
console.log("--------------------------------------------------------------------");
console.log("Type of variable ");
console.log("checking Log type of Function =>",typeof(square));
square(100); console.log("--------------------------------------------------------------------");
console.log("Get the area of rectangle ");
var lenght = 499;
var width = 917;
var area = lenght*width;
console.log("Area of rectangle is =>",area);
console.log("--------------------------------------------------------------------");
    var swapValues=function(values1,value2) {
        console.log("Values before Swap =>",values1,value2);
        var temp = values1;
        values1 = value2;
        value2 = temp;
        console.log("Values after Swap =>",values1,value2);
    }
    swapValues(1,2);
    console.log("--------------------------------------------------------------------");
    swapValues("Virat","Anushka");
    console.log("--------------------------------------------------------------------");
    swapValues(1000,2000);
    
    
    var string = "JS is the most popular language of internet";
    console.log("--------------------------------------------------------------------");
    console.log(`Given string is ${string}`);
    var string1 = string.length;
    console.log(`Total no. of character available in the string =>${string1}`);
    var string2 = string.charAt(6);
    console.log(`The character at index 6 is =>${string2}`);
    var string3 = string.charAt(11);
    console.log(`The character at index 11 is =>${string3}`);

    var string4 = string.charAt(string.length-1);
    console.log(`Last character using lenght property =>${string4}`);
    var string5 = string.charAt(0);
    console.log(`The very first character in the string =>${string5}`);
    var resultSplit = string.split(" ");
    var string6 = resultSplit.length * resultSplit.length;
    console.log(` Total number of words ${resultSplit.length} `);
    console.log("And it's square is =>",string6);