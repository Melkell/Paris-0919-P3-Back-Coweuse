const express = require('express');
const router = express.Router();
const connection = require('../conf');
const bodyParser = require('body-parser');

// Support JSON-encoded bodies
router.use(bodyParser.json());
// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true
}));

// GET all users
router.get('/', (req, res) => {
  connection.query('SELECT * FROM user', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des users')
    } else {
      res.json(results)
    }
  });
});

module.exports = router;