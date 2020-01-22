const router = require('express').Router;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const connection = require('../conf');

router.post('/', (req,res) => {
  const emailRegEx= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  if(!emailRegEx.test(req.body.email)){
    return res.status(401).send('Unauthorized user')
  }

  const user = {
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    password : bcrypt.hashSync(req.body.password)
  }

  connection.query(`SELECT id FROM user WHERE email = ?`, user.email, (err, results) => {
    if (err) {
      return res.status(500).send('Internal servor error')
    } else if (results.length>0) {
      return res.status(409).send('User already exists')
    }

    connection.query(`INSERT INTO user SET ?`, user, (err, results) => {
      if (err) {
        return res.status(500).send('Cannot register the user')
      }

      connection.query(`SELECT id, first_name, last_name, email FROM user WHERE id = ?`, results.insertId, (err, results) => {
        if (err) {
          return res.status(500).send('Internal servor error')
        }
        res.status(200).send(results)
      });
    });
  });
});

module.exports = router;