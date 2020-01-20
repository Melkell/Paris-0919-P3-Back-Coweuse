const mysql = require('mysql');

const userSchema = new mysql.Schema({
  first_name : {
    type: String,
    required: true,
    max: 255,
    min: 2
  },
  last_name : {
    type: String,
    required: true,
    max: 255,
    min: 2
  },
  email : {
    type: String, 
    required: true,
    max: 255,
    min: 6
  },
  password : {
    type: String,
    required: true, 
    max: 255, 
    min: 6
  }
});

module.exports = mysql.model('User', userSchema);