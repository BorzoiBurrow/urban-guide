const mysql = require("mysql2")

async function InsertTo(finalsql){
  console.log("insertion begun...")
try {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SQLtest",
    database: "Company"
  });
  let results = connection.execute(finalsql);
  console.log(results);

} catch (err) {
  console.log(err);
}}

module.exports = {InsertTo}