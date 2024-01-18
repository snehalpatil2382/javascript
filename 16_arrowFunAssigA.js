console.log("-------------> Step 1 <-------------------");
//1 Arrow Function with no arguments and no return value
const show = () => {
    console.log(`"Goog Morning,Today is Thursday"`);
}
show();
console.log("-------------> Step 2 <-------------------");
//2 Arrow Function with 3 arguments and no return value
const mul = (n1,n2,n3) => {
    console.log(`Multiplication is: ${n1*n2*n3}`);
}
mul(5,5,2);

const mul1=(n1,n2,n3=1) =>{
    console.log(`Multiplication is: ${n1*n2*n3}`);
}
mul1(10,4)

console.log("-------------> Step 3 <-------------------");
const add = (n1,n2,n3,n4,n5) => {
    return n1 + n2 + n3 + n4 + n5;
}
const returnValue = add(100,100,200,349,756);
console.log(`Addition is: ${returnValue}`);
const returnValue1 = add("I am"," learning ","ES6 ","feature ","in depth");
console.log(`Addition is: ${returnValue1}`);
