import { Employee } from "./Employee";
import { Department } from "./Department";

var emp = new Employee();
emp.id = 101;
emp.firstName = "shivam";
emp.lastname = "kumar";
emp.email = "shivamkumar116@gmail.com";

let depart = new Department(1, "IT");

emp.setdepartment = depart;

console.log("EmpID : " + emp.id);
console.log("Name : " + emp.firstName + " " + emp.lastname);
console.log("Email : " + emp.email);
console.log("Department ID : " + emp.getdepartment.id);
console.log("Department name : " + emp.getdepartment.name);
