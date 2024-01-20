
console.log(`------------------ Step 1 -----------------------------------------`);
const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
const newArr = arrayNumbers.map( (currentValue) => {
    return currentValue + 10;
} )
console.log(newArr);

console.log(`------------------ Step 2 -----------------------------------------------`);
const newArr1 = arrayNumbers.map((num) => {
    return num * num *num;
} )
console.log(newArr1);

console.log(`------------------ Step 3 -----------------------------------------------`);
const newArr2 = arrayNumbers.map((num,index) => {
    return num + index;
} )
console.log(newArr2);

