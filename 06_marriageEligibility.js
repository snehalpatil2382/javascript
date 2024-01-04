// var marriageEligibility = function (gender, age) {
//   if (gender == "Male"&& age >= 21 ||gender == "Female" && age >= 18) {
//     // Invalid Input
//     console.log(
//       `This person is eligible for marriage it's gender --> ${gender} and age is --> ${
//         (age)
//       }`
//     );
//   } else {
//     console.log(
//       `This person is not eligible for marriage it's gender  --> ${gender} and age is -->${
//         (age)
//       }`
//     );
//   }
// };
var marriageEligibility = function (gender, age) {
  if (gender == "Male" && age >= 21) {
    console.log(
      `This person is eligible for marriage it's gender = ${gender} , age = ${age}`
    );
  } else {
    if (gender == "Female" && age >= 18) {
      console.log(
        `This person is eligible for marriage it's gender = ${gender} , age = ${age}`
      );
    } else {
      console.log(
        `This person is not eligible for marriage  because it's gender = ${gender} , age = ${age}`
      );
    }
  }
};
marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);
