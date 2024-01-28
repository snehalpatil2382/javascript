
const arrayNums=[20,3,4,56,90,400,49];
arrayNums.push(55,56);
console.log(`--------------- Step 1 ------------------`);
console.log(arrayNums);
const array = arrayNums; 
console.log(array); 
console.log(`--------------- Step 2 ------------------`);
console.log(arrayNums);
arrayNums.splice(4, 0, 10,25)
const array1=  [...arrayNums]; // Deep Clone using Spread Operator
console.log(array1);
console.log(`--------------- Step 3 ------------------`);
const arrayEven =[2,30,14,8];
const newArray=arrayNums.concat(arrayEven);
console.log(newArray);

console.log(`--------------- Step 4 ------------------`);
const employee_info ={
    emp_id : 27,
    emp_name : "John Doe",
    salary :{
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR"
    },
    adress : {
        locality : {
            colony : "OM Vrindavan Society",
            street : "Kanch Pokali, 431202",
        },
        city : "Mumbai",
        state : "Mharashtra",
        country : "India"
    },
    mobiles :["+91 8600 3456 88","1800-4567 32","+91-9066 5678 77"]
}
console.log(employee_info);
console.log(`--------------- Step 5(a) ------------------`);
console.table(employee_info.adress);
console.log(`--------------- Step 5(b) ------------------`);
console.log(employee_info.mobiles);
console.log(`--------------- Step 6(a) ------------------`);
const employee = JSON.parse(JSON.stringify(employee_info));
employee.salary.july_month= "80,000INR";
console.log(employee.salary.july_month );
// console.log(employee_info.salary.july_month);
console.table(employee.salary);

console.log(`--------------- Step 6(b) ------------------`);
// const employee= JSON.parse(JSON.stringify(employee_info));
employee.adress.country= "United Kingdom";
console.log(employee.adress.country);
// console.log(employee_info.adress.country);
console.table(employee.adress);
console.log(`--------------- Step 6(c) ------------------`);
console.table(employee_info);
console.table(employee);