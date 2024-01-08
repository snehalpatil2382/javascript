console.log("---------------- step 1 ----------------");
const fruits_seasonal=["Banana","Orange","Apple", "Mango","Water Melon"];
const firstElement=fruits_seasonal[0];
console.log(`First element is : ${firstElement}`);
const lastElement=fruits_seasonal[4];
console.log(`Last element is : ${lastElement}`);

console.log("---------------- step 2 ----------------");
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log("---------------- step 3 ----------------");
const removedElements = fruits_seasonal.splice(4,1);
console.log(`Removed elements`);
console.log(removedElements);
console.log(`Original Array `);
console.log(fruits_seasonal);

console.log("---------------- step 4 ----------------");
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log("---------------- step 5 ----------------");
let fruits=["Banana","Orange","Apple", "Mango","Water Melon"];
const insertElement= fruits.splice(4,0,'Dragon Fruit');
// console.log(insertElement);
console.log(fruits);

console.log("---------------- step 6 ----------------");
const replace=fruits.splice(1,1,'kiwi');
// console.log(replace);
console.log(fruits);

console.log("---------------- step 7 ----------------");
var fruit =["Banana","Orange","Apple", "Mango","Water Melon"];
const index=fruit.slice(1,4);
console.log(index);

console.log("---------------- step 8 ----------------");
var fruit =["Banana","Orange","Apple", "Mango","Water Melon"];
let elements = fruit.slice(2);
console.log(elements);