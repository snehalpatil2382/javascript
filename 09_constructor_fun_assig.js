function Bank(bankName,location,ifscCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
     this.display=function(){
console.log(`BankName: ${this.bankName}, Location: ${this.location}, IFSC_Code: ${this.ifscCode}, Branch_Code: ${this.branchCode}`);
   }
}
console.log(`------ Bank Details ------`);
const yesBank=new Bank("yesBank","Pune","YES235567","4589");
yesBank.display();
const sbiBank=new Bank("sbiBank","Sangola","SBI236579","8919");
sbiBank.display();
const mahBank=new Bank("mahBank","Pimpari","MAH4567897","8916");
mahBank.display();
const axisBank=new Bank("axisBank","Solapur","AXIS256569","4567");
axisBank.display();

console.log(`----------------------`);
Bank.prototype.openTime="9 am";
console.log(Bank.prototype);
// console.log(yesBank.openTime);
