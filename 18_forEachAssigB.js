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
console.log(`------------------ Step 1 -----------------------`);
arrayEmployees.forEach((element) => {
  if (element.emp_company == "TCS") {
    console.log(
      `Employee Name: ${element.emp_name} , Company: ${element.emp_company}`
    );
  }
});

console.log(`------------------ Step 2 -----------------------`);
arrayEmployees.forEach((element) => {
  if (element.emp_salary >= 50000) {
    element.getDetails();
  }
});

// console.log(`------------------ Step 3 -----------------------`);
// const sum = arrayEmployees.reduce( (runningTotal, element) => {
//     return runningTotal + element.emp_salary;
// }, 0);
// console.log(sum);
console.log(`------------------ Step 3 -----------------------`);
let totalSalary = 0;
arrayEmployees.forEach((element) => {
  totalSalary = totalSalary + element.emp_salary;
});
console.log(`Sum of all employee salary is: ${totalSalary}`);

console.log(`------------------ Step 4 -----------------------`);
arrayEmployees.forEach((element) => {
  totalSalary;
});
const average = totalSalary / arrayEmployees.length;
console.log(`Average salary: ${average}`);

console.log(`------------------ Step 5 -----------------------`);
arrayEmployees.forEach(element => {
    if (element.emp_salary >= 75000 &&  ( element.emp_dept=="IT" || element.emp_dept =="HR")  ) {
       element.getDetails();
    }
});