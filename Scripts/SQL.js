// global vars and imports
const inquirer = require('inquirer');
let entrynum = 0
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
        message: `please enter the value. you are on ${entrynum} of ${globalcount} entries.`
// push answers to the values array.

    }]).then((answers) => {
         entrynum = entrynum + 1 
         values.push(answers)

// if more data is required to fill the entry, continue. Else Push to table.
     if (entrynum !== count){
            addvalue(sql, count)
     } else {
        console.log(values)
        sql = `${sql} ${values}`
        console.log(sql)
     }
     
    })
    
  
}



module.exports = {addvalue}