
console.log(`==================State Bank Of India=======================`);
let sbiBank = {
 BankName : "State Bank Of India",
 location : "Moshi",
 ifsc : "fgh57798098",
 accuntNumber : 34567897654321,
 interestRate :"6.7%",
 showDetails : function(){

    console.log(sbiBank);
 }


}
sbiBank.showDetails();
console.log(`==================Axis Bnak=======================`);
let axisBank = {
    BankName : "Axix Bnak",
    location : "aayush Garden ,spine Road",
    ifsc : "gugu57798",
    accuntNumber : 786816186753875,
    interestRate :"8.7%",
    showDetails : function(){

        console.log(axisBank);
    }

}
axisBank.showDetails();

console.log(`==================HDFC Bank=======================`);
let hdfcBank = {

    BankName : "HDFC Bank",
    location : "Dattawadi,Akurdi",
    ifsc : "hut57798098",
    accuntNumber : 6242427521363,
    interestRate :"4.6%",
    showDetails : function(){

        console.log(hdfcBank);
    }
}
hdfcBank.showDetails();
console.log(`==================Yes Bank=======================`);
let yesBank = {

    BankName : "Yes Bank",
    location : "Bhekarai Nagar",
    ifsc : "khs86723",
    accuntNumber : 5427474289642194,
    interestRate :"5.4%",
    showDetails : function(){

        console.log(yesBank);
    }
}
yesBank.showDetails();


let sbiBank={
    bankName:"State Bank Of India",
    location:"Khandala",
    accountNo: 875633241138,
    ifscCode: "SBI0004108",
    interestRate: '6.00%',
    
    showDetails: function() {
    console.log(`bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifscCode: ${this.ifscCode}, interestRate: ${this.interestRate}`);
    }
};
    let axisBank  = { 
        bankName:"Axis Bank",
        location:"Pune",
        accountNo: 446657892427,
        ifscCode: "UTIB0000135",
        interestRate: '6.6%',
    
        showDetails: function() {
        console.log(
            `bankName: ${this.bankName}, location: ${this.location}, accountNo: ${this.accountNo}, ifscCode: ${this.ifscCode}, interestRate: ${this.interestRate}`
        );
    }
    };
    console.log(`=======================SBI Bank===========================`);
    sbiBank.showDetails();
    axisBank.showDetails();