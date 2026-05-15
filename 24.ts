// create a typescript application defining an employee interface with properties such as id,name ,department allow adding and removing employees dynamically

interface Employee{
    id:number,
    name:string,
    department:string
}

let employees:Employee[]=[];

function addEmployee(emp:Employee){
    employees.push(emp);
    console.log('Employees added');
}
function deleteEmployee(id:number){
    const index=employees.findIndex((emp)=>emp.id==id);
    employees.splice(index,1);
}
function showEmployees(){
    console.log(employees);
}
addEmployee({
    id:1,
    name:"Harsh",
    department:"IT"
});

addEmployee({
    id:2,
    name:"Aman",
    department:"HR"
});

console.log("After Adding:");
showEmployees();
// Removing Employee

deleteEmployee(1);
console.log("After Removing:");
showEmployees();
