let professor = {
   profName:"R.V.kolawale",
   age:34,
   subject:"Adavance Java",
   designation:"Principal",
   adress:"Solapur",
   degree:{
   engineering:"CSC",
   phd:"Adv Computing",
   mcs:"Computer Science",
   },
certificates:["Hacker Rank Participation","Certificate in IFE course","Cerificate  in Adv Programing"],
totalExperience:{

   }
}
console.log("------------- Step 1 -----------------------");
console.log(professor);
console.log("------------- Step 2 -----------------------");
console.log(professor.degree);
console.log("------------- Step 3 -----------------------");
console.log(professor.certificates);
console.log("------------- Step 4 -----------------------");
professor.totalExperience.experience="14 years";
console.log(professor.totalExperience);
console.log("------------- Step 5 -----------------------");
console.log("Modify adress Solapur to Sangola :");
professor.adress="Sangola";
console.log(professor);
console.log("------------- Step 6 -----------------------");
console.log("Add new Certificate is :");
professor.certificates.push("Oracle Certified");
console.log(professor.certificates);
console.log("------------- Step 7 -----------------------");
// let lastElement=professor.certificates.pop();
 let lastElement=professor.certificates.splice(-1);
// let lastElement=professor.certificates[professor.certificates.length-1];
console.log(lastElement);
console.log("------------- Step 7 -----------------------");
console.log(professor);
console.log("------------- Step 7 -----------------------");
for (const key of professor.certificates) {
   const element = professor.certificates[key];
        console.log(`Certificate ==> ${key}`);
}