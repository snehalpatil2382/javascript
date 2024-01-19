console.log(`------------------ Step 1 -----------------------`);
const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach( (element,index,array)=>{
 console.log(`Element: ${element}, Index: ${index}`);
} );

console.log(`------------------ Step 2 -----------------------`);
// function printPositives(array){
// array.forEach(function(item){
//     if (item >-1) {
//         console.log(item);
//     }
// });
//  }

var result=" ";
 arrayNumbers.forEach(element => {
    if (element>0) {
     result+= element +" ";
    }
 });
 console.log(`Positive Numbers are: ${result}`);

 console.log(`------------------ Step 3 -----------------------`);
const arrynegative=[];
 arrayNumbers.forEach((element)=>{
    if (element<0) {
     arrynegative.push(element);
    }
 });
//  console.log(`Negative Numbers are:`);
console.log(arrynegative);

 console.log(`------------------ Step 4 -----------------------`);
var result=" ";
arrayNumbers.forEach(element => {
   if (element%2==0) {
    result+= element +" ";
   }
});
console.log(`Even Numbers are: ${result}`);

console.log(`------------------ Step 5 -----------------------`);
var sum=0;
arrayNumbers.forEach((element) => {
  sum = sum +element;
});
console.log(`Sum of all elements is: ${sum}`);

console.log(`------------------ Step 6 -----------------------`);
let str = ``;
arrayNumbers.forEach((element,index) => {
   if (index% 2 === 0) {
   str=str+" "+ element;
  }
});
console.log(`Even indexed Number is :${str}`);
