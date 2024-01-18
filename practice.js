
  // console.log(`----------By using for loop ---------------`);

  //   const arr = [11,3,4,11,4,7,3];
  //   const n = arr.length;
  //   // removeDuplicates() returns new size of
  //   // array
  
  //  const result =removeDuplicates(arr, n);
  //   // Print updated array
  //   for (const i=0; i<result; i++)
  //   //    document.write( arr[i]+" ");
  //   console.log(arr[i]+"");
  
 console.log(`---------- Remove duplicate element in array --------------------`);
function removeDuplicates(arr){
    let removeDuplicates = [];
    // loop through array
    for(let i of arr) {
        if(removeDuplicates.indexOf(i) ===-1) {
           removeDuplicates.push(i);
        }
    }
    console.log(removeDuplicates);
  }
const array = [11,3,4,11,4,7,3];
// calling the function
// passing array argument
removeDuplicates(array);
// The for...of loop is used to loop through all the elements of an arr array.
// The indexOf() method returns -1 if the element is not in the array. 
// Hence, during each iteration, if the element equals -1, 
// the element is added to uniqueArr using push().

console.log(`---------- capitalize first and last letter in word --------------------`);
// Define a function that takes a string as an argument
function capital(str) {
  // Split the string into an array of words
  let words = str.split(" ");
  // Loop through each word in the array
  for (let i = 0; i < words.length; i++) {
    // Get the first and last letter of the word
    let first = words[i][0];
    let last = words[i][words[i].length - 1];
    // Capitalize the first and last letter
    first = first.toUpperCase();
    last = last.toUpperCase();
    // Replace the original word with the modified word
    words[i] = first + words[i].slice(1, -1) + last;
  }
  // Join the array back into a string and return it
  return words.join(" ");
}

let example = "How are you mate";
console.log(`Before: ${example}`);
console.log(`After: ${capital(example)}`);

