console.log(`------- Palindrome Program --------------`);
// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log(` ${string} : palindrome`);
    }
    else {
        console.log(` ${string} : not palindrome`);
    }
}

//take input
// const string = prompt('Enter a string: ');

checkPalindrome("madam");
checkPalindrome("dad");
checkPalindrome("hello");

console.log(`------- Anagram Program --------------`);

function checkAnagramWithSort(str1, str2) {
    let newStr1 = str1.toLowerCase().replace('').split('').sort().join('')
    let newStr2 = str2.toLowerCase().replace('').split('').sort().join('')

    return (newStr1 === newStr2);
  }
  const result=checkAnagramWithSort("Silent","Listen");
  console.log(`Silent,Listen is Anagram : ${result}`);
  const result1=checkAnagramWithSort("Hello","Word");
  console.log(`Hello ,Word is Anagram : ${result1}`);
  const result2=checkAnagramWithSort("Such","much");
  console.log(`Such,much is Anagram : ${result1}`);