const inquirer = require('inquirer');
let entrynum = 0

async function addvalue(sql, count) {
console.log(count)
while (entrynum < count)(
 inquirer.prompt([
    {
        type: "input",
        name: "value",
        message: `please enter the value. you are on ${entrynum} of ${count} entries.`

    }]).then((answers) => {
     entrynum = entrynum + 1 
     
    })
    )
    let values = ''
}



module.exports = {addvalue}