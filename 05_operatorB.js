console.log("-------------------> Step 1 <--------------------------");
function greterNumber(n1,n2){
       var number=n1>n2?`n1 is greater number :${n1} `:`n2 is greater number :${n2} `;
       console.log(number);
     
}greterNumber(10,-10);
greterNumber(800,899);
console.log("-------------------> Step 2 <--------------------------");
function evenOdd(n1){
 var num = n1;
var result = num % 2;
var resultValue = result == 0 ?`Given number is Even:${n1}`: `Given number is Odd number :${n1}`; 
console.log(resultValue);
}evenOdd(29);
evenOdd(44);
evenOdd(0);
evenOdd(101);
console.log("-------------------> Step 3 <--------------------------");
function wordLength(string) {
    var word=string;
    var word = string.length;
    var result=word %2;
    var resultValue=result==0?`Given word length is :${word} -->"EVEN"`:`Given word length is :${word} -->"ODD"`;
   console.log(resultValue);
} wordLength("JavaScript");
wordLength("developer");
wordLength("Google");