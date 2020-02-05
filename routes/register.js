const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const connection = require('../conf');

const register = async (req, res) => {
  const formFirst_name = req.body.first_name;
  const formLast_name = req.body.last_name;
  const formEmail = req.body.email;
  const role_id = req.body.role_id;
  const formPassword = req.body.password;

  // Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(formPassword, salt);
  
  const user = {
    first_name : formFirst_name,
    last_name : formLast_name,
    role_id : role_id,
    email : formEmail,
    password : hashedPassword
  }

  const emailRegEx= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  if(!emailRegEx.test(formEmail)){
    return res.status(401).send('Invalid email')
  }

  connection.query(`SELECT email FROM user WHERE email = ?`, user.email, (err, results) => {
    if (err) {
      throw err
      return res.status(500).send('Internal servor error')
    } else if (results.length>0) {
      return res.status(409).send('User already exists')
    }

    connection.query(`INSERT INTO user SET ?`, user, (err, results) => {
      if (err) {
        console.log(err)
        return res.status(500).send('Cannot register the user')
      }

      connection.query(`SELECT id, first_name, last_name, role_id, email FROM user WHERE id = ?`, results.insertId, (err, results) => {
        if (err) {
          throw err
          return res.status(500).send('Internal servor error')
        }
        res.status(200).send(results)
      });
    });
  });
}

module.exports = register
