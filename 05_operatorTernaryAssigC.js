console.log("-------------------> Step 1 <--------------------------");
 var maleMarriageEligibility = function(gender,age,boyName){
   var result=gender=="Male"&&age>=21?
   `Hey ${boyName} you are eligible for Marriage`:
   `Sorry..! ${boyName} you are not eligible for Marriage`
console.log(result);
 }
 maleMarriageEligibility("Male",25,"BIllgates");
 maleMarriageEligibility("Male",17,"Stew Jobs");

 console.log("-------------------> Step 2 <--------------------------");
 var femaleMarriagrEligibility=function(gender,age,girlName){
    var result=gender=="Female"&&age>=18?
    `Hey ${girlName} you are eligible for Marriage`:
    `Sorry..! ${girlName} you are not eligible for Marriage`;
    console.log(result);
 }
 femaleMarriagrEligibility("Female",16,"Jenifer");
 femaleMarriagrEligibility("Female",27,"Malinda Gates");

