 function factorialOfWordsCount(words){
  
    let result = 1;
    var wordSplit = words.split(" ");
    // console.log(result);
    console.log(`Total words in the string is: ${wordSplit.length} `);

    for (let index=1; index <=wordSplit.length; index++) {
       result= result * index;  
    }
    console.log(`Factorial of given string is :${result}`);
}
console.log(`----------- Step 1 ------------`);
factorialOfWordsCount("Revision is mother of Success");
console.log(`----------- Step 2 ------------`);
factorialOfWordsCount("We never fail, we always learn, Mind it");
console.log(`----------- Step 3 ------------`);
factorialOfWordsCount("");
console.log(`----------- Step 4 ------------`);
factorialOfWordsCount("Snehal Ramesh Patil");
console.log(`----------- Step 5 ------------`);
let words = null;   
console.log(`Invalid  Input : ${words}`); 

