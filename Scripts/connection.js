const mysql = require('mysql2');

// creates the connection between MYSQL and the script.

const company = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SQLtest",
    database: "Company"

});

company.connect((err) => { 
    if (err) { 
      throw err; 
    } else { 
      console.log("connected to company database"); 
    } 
  }); 

// decides what table will be inserted too
function InsertTo(finalsql){
if (finalsql === undefined ){
console.error("InsertTo can not accept a undefined variable.")
}

else{
  
}}





module.exports = [company, InsertTo]