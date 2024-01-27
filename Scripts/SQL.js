// global vars and imports
const inquirer = require('inquirer');
let entrynum = 0
let answerstorage = []
let values = []
let sql = ''
let globalcount = ''

// addvalue will execute X amount of times till all data to be added is given. 

async function addvalue(sql, count) {
globalcount = count 

 inquirer.prompt([
    {
        type: "input",
        name: `${entrynum}`,
        message: `please enter the value. you are on ${entrynum + 1} of ${globalcount} entries.`
// push answers to the values array.

    }]).then((answers) => {
         entrynum++
        answer = Object.values(answers)
         answerstorage.push(answer)
         console.log(answerstorage)
        //  values = Object.keys(answerstorage)

// if more data is required to fill the entry, continue. Else Push to table.
     if (entrynum !== count){
            addvalue(sql, count)
     } else {
         SqlAssembly(sql,answerstorage)

     }})}


// accepts the values and the SQL statement made by index
function SqlAssembly(sql,values){
   console.log(sql)
   console.log(answerstorage)
}





module.exports = {addvalue}