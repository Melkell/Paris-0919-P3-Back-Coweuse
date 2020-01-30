const  mysql = require('mysql')
require('dotenv').config(process.cwd(), '.env')
const  connection = mysql.createConnection({
  host : process.env.DB_HOST,
  user :  process.env.DB_USER,
  port : process.env.DB_PORT,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME
});
module.exports = connection