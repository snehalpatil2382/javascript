
const arrayRollNumbers =[113,45,56,11,32,45,109,799,56,45];
console.log(`-------------- Reverse Array ---------------`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log(`-------------- Sort() Array ---------------`);
arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log(`-------------- Ascending Order ---------------`);
arrayRollNumbers.sort((a, b)=> { 
    return a>b ? 1 : -1; 
});
console.log(arrayRollNumbers);

console.log(`-------------- Greatest Number ---------------`);
let greatest= arrayRollNumbers.reduce(function(a,b){
    return (a>b) ? a:b;
})
console.log(`Greatest Number : ${greatest}`);

console.log(`-------------- Smallest Number ---------------`);
let smallest= arrayRollNumbers.reduce(function(a,b){
    return (a<b) ? a:b;
})
console.log(`Smallest Number : ${smallest}`);

console.log(`-------------- Remove Duplicate ---------------`);
 let array = [...new Set(arrayRollNumbers)]
console.log(array);