
console.log(`=======================================Leap Year==================================`);
var leapYear = function isLeapYear(year){
if (year==null||year==undefined ||year==NaN) {
    console.log(`${year} is not valid leap year........`);
} else {
    
  if (year%4==0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is a not leap year.............`);
  }
      
    
}

    
}
leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear("Twenty Twenty");
leapYear(1750);
leapYear(null);
leapYear(undefined);
leapYear(NaN);
