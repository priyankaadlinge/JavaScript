


let pleasure = {
 
    companyName  : "pleasure",
    fuelType :     "petrol",
    mileage :       40,
    TiereType:     "tubeless",
    engineType:   "BS5",
}
let activa6G = {
 
    companyName  : "activa6G",
    fuelType :"petrol",
    mileage :50,
    TiereType: "tubeless",
    engineType: "BS6",
}
let bajajChetak = {
 
    companyName  : "bajajChetak",
    fuelType :"Electric",
    mileage :40,
    TiereType: "tubeless",
    engineType: "BS5",
}

let suzukiBurgman = {
 
    companyName  : "suzukiBurgman",
    fuelType :"petrol",
    mileage :45,
    TiereType: "tubeless",
    engineType: "BS5",
}

let ampereMagnus = {
 
    companyName  : "ampereMagnus",
    fuelType :"Electric",
    mileage :40,
    TiereType: "tube",
    engineType: "BS4",
}

let sinhgad = {
name : "Sinhgad College",
department : "Computer Engg",
city : "Pandharpur",
pincode : 413304,

}

let sveri = {
    name : "SVERI'S College",
    department : "Mechanical Engg",
    city : "Pandharpur",
    pincode : 413304,
    
    }

    let febtech = {
        name : "Febtech College",
        department : "Electric Engg",
        city : "Sangola",
        pincode : 413307,
        
        }
        
let dypatil = {
    name : "D Y Patil College",
    department : "Civil Engg",
    city : "Pune",
    pincode : 411018,
    
    }

class Vehicals {
    constructor(companyName,fuelType,mileage,TiereType,engineType){
this.companyName = companyName;
this.fuelType = fuelType;
this.mileage = mileage;
this.TiereType = TiereType;
this.engineType = engineType;

    }
    showdwtails(){

        console.log(` Vehicals Details is : ${this.companyName},${this.fuelType},${this.mileage},${this.TiereType},${this.engineType}`);
    
    }
    
}

 const pleasuree = new Vehicals("pleasure","petrol",40,"tubeless","BS5");
  const activaa6G =new Vehicals("activa6G","petrol",50,"tubeless","BS6");
 const bajajChetaka = new Vehicals("bajajChetak","Electric",40,"tubeless","BS5");
 const suzukiBurgmann = new Vehicals("suzukiBurgman","petrol",45,"tubeless","BS5");
 const ampereMagnuss= new Vehicals("ampereMagnus","Electric",40,"tube","BS4");

//pleasuree.showdwtails();
//activaa6G.showdwtails();
//bajajChetaka.showdwtails();
//suzukiBurgmann.showdwtails();
//ampereMagnuss.showdwtails();

const array = [pleasuree,activaa6G,bajajChetaka,suzukiBurgmann,ampereMagnuss];

for (const element of array) {
    element.showdwtails();
    
}
console.log(`----------------------------College Details---------------------------------------------------`);
class College {
    constructor(name ,department,city,pincode){
     this.name = name;
     this.department= department;
     this.city= city;
     this.pincode = pincode;
    }
    traverse(){

        console.log(`  Details is : ${this.name},${this.department},${this.city},${this.pincode}`);
    }
}
  const Sinhgad = new College("Sinhgad College","Computer Engg","Pandharpur",413304);
  const SVERI = new College("SVERI'S College","Mechanical Engg","Pandharpur",413304);
 const Febtech = new College("Febtech College","Electric Engg","Sangola",413304);
  const DY =new College("D Y Patil","Civil Engg","Pune",411018);

  traverse(Sinhgad);
  console.log(`-------------------------------------------------------------------------------`);
  traverse(SVERI);
  console.log(`-------------------------------------------------------------------------------`);
  traverse(Febtech);
  console.log(`-------------------------------------------------------------------------------`);
  traverse(DY);


 function traverse(sinhgad){

    for (const key in sinhgad) {
        if (sinhgad.hasOwnProperty.call(sinhgad, key)) {
            const element = sinhgad[key];
            console.log(`${key},${element}`);
        }
    }
 }

