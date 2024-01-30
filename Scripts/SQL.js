// global vars and imports
const inquirer = require('inquirer');
const connection = require('./connection');
let entrynum = 0
let answerstorage = []
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
function SqlAssembly(sql,answerstorage){
   let finalsql = sql
   let count = 0
   for (item in answerstorage){
    if (count + 1 === answerstorage.length){
        finalsql = finalsql + ` "${answerstorage[count]}"`
    }
    else{
        finalsql = finalsql + ` "${answerstorage[count]}",`
        count++
    }}
   finalsql = finalsql + ")"
   connection.InsertTo(finalsql)
   
   
}





module.exports = {addvalue}