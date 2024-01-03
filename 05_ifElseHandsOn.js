console.log("-------------------> Step 1 <--------------------------");
var isEvenOrOdd = function (num){
    var returnValue = "";
    if (num % 2 == 0) {
      returnValue = "EVEN";
    } else {
      returnValue = "ODD";
    }
    return returnValue;
  }
  var result = isEvenOrOdd(45);
  console.log(`Given number is : ${result}`);
  var result = isEvenOrOdd(70);
console.log(`Given number is : ${result}`);
var result = isEvenOrOdd(67);
console.log(`Given number is : ${result}`);
var result = isEvenOrOdd(98);
console.log(`Given number is : ${result}`);

console.log("-------------------> Step 2 <--------------------------");
 var voteEligibility =function(age){
  if (age>18) {
    console.log(`This person are eligible for vote`);
  } else {
    console.log(`This person are  not eligible for vote`);
  }
 } 
 var result= voteEligibility(18);
 var result= voteEligibility(20);
 var result= voteEligibility(17);
 var result= voteEligibility(40);

 console.log("-------------------> Step 3 <--------------------------");
 var word = function(string){
  var name=string.length;
  console.log(`String length is: ${name}`);
   if (string.length>10)//(name>10)
  {
    console.log(`Given String length is greater than : 10`);
  } else {
    console.log(`Given String length is less than : 10`);
  }
 }
 var result= word("JavaScript-ES6");

 console.log("-------------------> Step 4 <--------------------------");
 var startWith= function(string){
 
 if (string.startWith="Java") {
  console.log(`Given string start with "Java"`);
 } else {
  console.log(`Given string not start with "Java"`);
 }
 }
 var result=startWith("JavaScript Language");
 