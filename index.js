// Write your solution in this file!
const employee = {
    name: {
        first: 'John',
        last: 'Doe', 
    },
    streetAddress: {
        city: 'Brooklyn',
        state: 'NY',
        zipCode: '11211',
  },
}; 
function updateEmployeeWithKeyAndValue(employee, key, value) {
let copyOfEmployee = {...employee};
copyOfEmployee[key] = value;
return copyOfEmployee;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value;
return employee;
};
function deleteFromEmployeeByKey(employee, key){
let copyOfEmployee = {...employee};
delete copyOfEmployee[key];
return copyOfEmployee;
};
function destructivelyDeleteFromEmployeeByKey(employee, key){
delete employee[key] ;
return employee;
};