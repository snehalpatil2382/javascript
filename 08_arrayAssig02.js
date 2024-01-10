const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log("------------- Given Array ---------------------");
console.log(arrayNumbers);
console.log("------------- Step 1 -----------------------");
console.log(`Total length of array is : ${arrayNumbers.length}`);

console.log("------------- Step 2 -----------------------");
let inexof0=arrayNumbers[0];
console.log(`First element in array is:${inexof0}`);
let lastElement=arrayNumbers[arrayNumbers.length-1];
console.log(`Last element in array is:${lastElement}`);

console.log("------------- Step 3 -----------------------");
let last=arrayNumbers[arrayNumbers.length-3];
console.log(`3rd last element in array is:${last}`);

console.log("------------- Step 4 -----------------------");
const even = [];
for (const element of arrayNumbers) {
    if (element % 2 === 0) {
        even.push(element);
    }
}
console.log(`Even Number :${even}`);

console.log("------------- Step 5 -----------------------");
const odd=[];
for (const element of arrayNumbers) {
    if (element %2!==0) {
        odd.push(element)
    }    
}console.log(`Odd Number :${odd}`);
console.log("------------- Step 6 -----------------------");
let add=0;
for (const element in arrayNumbers) {
    if (element %2==0) {
        add=add+arrayNumbers[element];
        }
}
console.log(`Even positioned element sum is: ${add}`);
console.log("------------- Step 7 -----------------------");
let add1=0;
for (const element in arrayNumbers) {
    if (element %2!==0) {
        add1=add1+arrayNumbers[element];
        }
}
console.log(`Odd positioned element sum is: ${add1}`);
console.log("------------- Step 8 -----------------------");
let sum=0;
for (const index in arrayNumbers) {
   console.log(arrayNumbers[index]);
   sum = sum + arrayNumbers[index];
}console.log(`Sum of all elements in array :${sum}`);

console.log("------------- Step 9 -----------------------");
const multiply=[];
for (const element of arrayNumbers) {
    if (element %5==0) {
        multiply.push(element)
    }    
}console.log(`The Number are multiple of 5 is:${multiply}`);

console.log("------------- Step 10 -----------------------");
 let element=arrayNumbers.includes(115);
 console.log(`115 are avaliable in given array : ${element}`);

 console.log("------------- Step 11 -----------------------");
 let element1=arrayNumbers.includes(23);
 console.log(`23 are avaliable in given array : ${element1}`);

 console.log("------------- Step 12 -----------------------");
 arrayNumbers.splice(3,0,55,66);
console.log(`Insert Numbers 55,66 at index 3`);
console.log(arrayNumbers);

 console.log("------------- Step 13 -----------------------");
 arrayNumbers.splice(4,3,1);
 console.log(`Delete 3 elements from index 4`);
 console.log(arrayNumbers);

