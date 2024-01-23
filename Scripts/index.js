// index will handle the creation of the command to be sent to SQL.js.
// SQL.js will then execute this command.


// global vars
const inquirer = require('inquirer');
let sql = ""


// gather wanted action.
inquirer.prompt([
{
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [ 
       {name: 'view roles', value: 'View Roles'},
       {name: 'view departments', value: 'View Departments'},
       {name: 'view employees', value: 'View Employees'},
       {name: 'add department', value: 'AddDepartment'},
       {name: 'add role', value: 'AddRole'},
       {name: 'add employee', value: 'AddEmployee'},
]}
  ])
  .then((answers) => {
    // convert wanted action to sql prompt
console.log(answers)
sql = tables(answers)
console.log(sql)
})

function tables(answers){
    
}