console.log("-------------------> Step 1 <--------------------------");
function squareOfWordLength(string) {
  var length = string.length;
  console.log("Given string length is:", length);
  var result = length * length;
  console.log("Square length of given string is: ", result);
}
squareOfWordLength("JavaScript"); //Function call or Invokation
console.log("--------------------------------------------------------");
squareOfWordLength("JGoogle Chrome");
console.log("--------------------------------------------------------");
squareOfWordLength("Developer Smart");

console.log("-------------------> Step 2 <--------------------------");

function word() {
  var string = "I am Angular Developer";
  var result = string.length;
  console.log(`Given String length is:${result}`);
  var result1 = string.split(" ");
  console.log(` Total words in the string is: ${result1.length} `);
  var result2 = 22/4;
  console.log(
    ` string length divided by total number of word in string is: ${result2} `
  );
  var result2 = 22 * 4;
  console.log(
    ` string length multiply by total number of word in string is: ${result2} `
  );
}
word();
