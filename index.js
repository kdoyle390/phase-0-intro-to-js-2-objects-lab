// Write your solution in this file!
const employee = {};
employee.name = "Jennifer";
employee.streetAddress = "123 Sesame St";



function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemployee = {...employee };

        newemployee[key] = value;

        return newemployee;
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...key };
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}