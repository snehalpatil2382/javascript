
function bankDetails(bankName,accountNum,location,pinCode){
    var result= bankName+accountNum+location+pinCode; 
    console.log("Bankname:",bankName,',',"Account_Number:",accountNum,',',"Location:",location,',',"Pincode:",pinCode);
   return result;

}
console.log("--------------- Bankdetails ----------------");
var result1=bankDetails("CITY Bank",3456782345,"Pune",431202);
var result2=bankDetails("Axis Bank",7856782345,"Mumbai",441202);
var result3=bankDetails("HDFC Bank",8956782345,"Pune",631202,);