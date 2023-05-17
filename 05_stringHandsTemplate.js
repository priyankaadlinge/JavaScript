var string = "  Hey you are doing good, keep it up   ";
    function givenString() {
    console.log("Given String is :",string);
    console.log("--------------------------------------------------------------------");

    var stringLength = string.length;
    console.log("Length of the string is =>",stringLength);
    console.log("--------------------------------------------------------------------");

    var trimString = string.trim(); 
    console.log("Trimmed string & it's length is => ",trimString,trimString.length);
    console.log("--------------------------------------------------------------------");

    var xSpaces = (string.length) - (trimString.length);
    console.log(" Total extra spaces in trimmed String is =>",xSpaces);
    console.log("--------------------------------------------------------------------");

    var firstName = trimString.charAt(0);
    var lastName = trimString.charAt(trimString.length-1);
    console.log("First & Last character of trimmed string is =>",firstName,lastName);
    console.log("--------------------------------------------------------------------");

    console.log(trimString);
    var splitString = trimString.split(" ");
    console.log("Total no. of words available after trimed string =>",splitString.length);
    console.log("--------------------------------------------------------------------");

    console.log("Print the index of good from string =>",trimString.indexOf("good"));
    console.log("--------------------------------------------------------------------");
    
    console.log("Substring starting from index 22 =>",trimString.substring(22));
    console.log("--------------------------------------------------------------------");
    console.log("Checked is string ends with 'up' =>",trimString.endsWith("up"));
    console.log("--------------------------------------------------------------------");
    
    console.log("Checked is string start with 'Hey' =>",trimString.startsWith("Hey"));
}
    givenString();