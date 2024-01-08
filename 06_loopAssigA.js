
let s1 = "I am very food IT Developer";
let vowelsCount =0;
for (let index = 0; index < s1.length; index++) {
    let char = s1.charAt(index).toLowerCase();
    if (char== 'a' || char== 'e'|| char== 'i'  || char== 'o' || char== 'u') {
        vowelsCount = vowelsCount + 1;
    }
}
console.log(`Total number of Vowels is: ${vowelsCount}`);

function sumOfSeries( )
{
    let sum = 0;
    for (let i = 1; i <= 5; i++)
        sum += i * i * i;
console.log(`Sum of cube of numbers from 1 to 5 is: ${sum}`);
}
 sumOfSeries();
 
function oddPositionedChars(string){
 for (var i=0;i<=string.length-1; i++){
    if (i%2==0) {
       var string1=string.charAt(i);
        console.log(`Odd position Chracter in String1 is:${string1}`);
        
    }
 }
}oddPositionedChars("Hard work always pays back");