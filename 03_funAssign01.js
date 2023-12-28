console.log("=========== STEP 1 ==================");
function num() {
  var a = 5;
  var b = 15;
  var result = a + b;
  var mul = a * b;
  console.log("Addition:", result);
  console.log("Multiplication:", mul);
}
num();
console.log("=========== STEP 2 ==================");
function personDetails(firstName, lastName, collageName) {
  var firstName = "Snehal";
  var lastName = "Patil";
  var collageName = "Vidhyan Mahavidyalaya Sangola";
  console.log("My First Name is:", firstName);
  console.log("My Last Name is:", lastName);
  console.log("My Collage Name is:", collageName);
}
personDetails();
console.log("=========== STEP 3 ==================");
function swapValues(n1, n2) {
  console.log("Before Swap n1:", n1);
  console.log("Before Swap n2:", n2);
  var temp = n1;
  n1 = n2;
  n2 = temp;
console.log("After Swap n1:", n1);
  console.log("After Swap n2:", n2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);
console.log("=========== STEP 4 ==================");
function arg(n1, n2, n3) {
  var result = n1 + n2 + n3;
  return result;
}
console.log("------ Addition --------");
var addThreeValues = arg(10.23, 600, 40);
console.log("Addition of given number is:", addThreeValues);

var resultValue = arg(" Hello ", " Good ", " Morning ");
console.log("Greeting Message:", resultValue);
