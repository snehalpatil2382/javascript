console.log(`1) String --------`);
function stringHandsOn(){
    var string="   Hey you are doing good,keep it up   ";
    console.log(`Given String is:${string}`);
}stringHandsOn()
console.log(`2) Length ----------`);
var string="   Hey you are doing good, keep it up   ";
console.log(`Length of String is:${string.length}`);
console.log(`3) Trim --------`);
var result=string.trim();
console.log(`After Trim String is:${result}  It's length is ${result.length}`);
console.log(`4)Removed Spaces --------`);
console.log(`Total No of extra spaces is :${ string.length-result.length}`);
console.log(`5)charAt --------`);
var charAtIndex0 = result.charAt(0);
var charIndexlast=result.charAt(result.length-1);
console.log(`First Character is :${charAtIndex0} , last Character is:${charIndexlast}`);
console.log(`6)Split ---------`);
var word = result.split(" ");
console.log(word);
console.log(`Total words in string is: ${word.length}`);
console.log(`7)IndexOf --------`);
var Index =result.indexOf("good");
console.log(`Index of "good" is: ${Index}`);
console.log(`8)Substring and Slice --------`);
var result1=result.includes(22);
console.log(`Substring is: ${result1}`);
var result2 = result.slice(22);
console.log(` Slice is: ${result2}  `);
console.log(`9)EndsWith ----------`);
var result3=result.endsWith("up");
console.log(`String Ends with: ${result3}`);
console.log(`10)StartWith ---------`);
var result4=result.startsWith("Hey");
console.log(`String Start with: ${result4}`);




