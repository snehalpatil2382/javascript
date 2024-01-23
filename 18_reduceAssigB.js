class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
    getDetails() {
      console.log(
        `Id: ${this.emp_id}, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`
      );
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  const arrayEmployees = [
    emp_anil,
     emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];
  console.log(`-------------- Step 1 --------------------------------`);
 const array = arrayEmployees.filter( (element) => {
    return element.emp_company=="Wipro" ;
}).reduce((rt,element) => {
   return rt + element.getDetails();   
},0) 

console.log(`-------------- Step 2 -------------------------------------`);
const array1 = arrayEmployees.filter( (element) => {
  return element.emp_dept==="IT" || element.emp_dept==="HR";
}).reduce((rt,element) => {
 return rt + element.getDetails();   
},0)

console.log(`-------------- Step 3 -------------------------------------`);
const array2 = arrayEmployees.filter( (element) => {
  return element.emp_id >50;
}).reduce((rt,element) => {
 return rt + element.getDetails();   
},0)

console.log(`-------------- Step 4 -------------------------------------`);
const array3 = arrayEmployees.filter( (element) => {
  return element.emp_name.startsWith('A') || element.emp_name.startsWith('V') ||element.emp_name.startsWith('M') ;
}).reduce((rt,element) => {
 return rt + element.getDetails();   
},0)

console.log(`-------------- Step 5 -------------------------------------`);
const totalSalary = arrayEmployees.reduce( (runningTotal, element) => {
  return runningTotal + element.emp_salary ; 
},0);
console.log(`Average salary of all Employee : ${totalSalary/arrayEmployees.length}`);

 console.log(`-------------- Step 6 -------------------------------------`);
const array4 = arrayEmployees.filter( (element) => {
  return element.emp_dept==="IT";
})
const total= array4.reduce((rt,element) => {
 return rt + element.emp_salary;   
},0)
console.log(`Average salary of IT dept Employee: ${total/array4.length}`);