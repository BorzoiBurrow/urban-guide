// index will handle the creation of the command to be sent to SQL.js.
// SQL.js will then execute this command.


// global vars
const inquirer = require('inquirer');
const construction = require('./SQL')
let sql = ""
let count = ''

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
sql = tables(answers)
})

function tables(answers){
    action = answers.action

    switch(action){
      case action = 'View Roles':
        sql = "SELECT * FROM Roles"
        return sql;
      case action = "View Departments":
        sql = "SELECT * FROM Departments"
        return sql;
      case action = "View Employees":
        sql = "SELECT * FROM Employees"
        return sql;
      case action = "AddDepartment":
        sql = "INSERT INTO Departments VALUES ("
        count = 2
        construction.addvalue(sql, count)
        break;
      case action = "AddRole":
        sql = "INSERT INTO Roles VALUES ("
        count = 4
        construction.addvalue(sql, count)
        break;
      case action = "AddEmployee":
        sql = "INSERT INTO Employees VALUES ("
        count = 5
        construction.addvalue(sql, count)
        break;
 
      default:
        console.error("No relevant case was selected!")
  }}