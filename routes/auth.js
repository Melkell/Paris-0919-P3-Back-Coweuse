const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const connection = require('../conf');

require('dotenv').config(process.cwd(), '../.env')

//Route post auth
const auth = (req, res) => {
  const secret = process.env.TOKEN_SECRET;
  const email = req.body.email;
  const password = req.body.password;

  // Vérification du format de l'email fournit
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  if(!emailRegex.test(email)){
    return res.status(401).send('Unauthorized user')
  }

  // Récupération du user par l'email
  connection.query(`SELECT * FROM user WHERE email = ?`, email, (err, results) => {
    if (err) {
      return res.status(500).send(err)
    } else if (!results[0]) {
      return res.status(409).send('Unknown user')
    }
    // Test du mdp envoyé
  const passwordIsValid = bcrypt.compareSync(password, results[0].password);
  if(!passwordIsValid) {
    return res.status(401).send({auth: false, token: null});
  }

  const token = jwt.sign(
    {id : results[0].id, first_name: results[0].last_name, email: results[0].email}, 
    secret,
    {
      expiresIn : '24h'
    },
    {
      algorithm : 'RS256'
    }
  );

  res.header('Access-Control-Expose-Headers', 'x-access-token');
  res.set('x-acces-token', token);
  res.status(200).send({auth: true});
  })

  
}

module.exports = auth;

