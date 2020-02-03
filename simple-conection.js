var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "dena",
  password: "denacantikbanget",
  database: "world"
});
connection.connect();
connection.query("SELECT * from city LIMIT 5", function(
  error,
  results,
  fields
) {
  if (error) throw error;
  console.log("The solution is: ", results[0].District);
});
connection.end();
