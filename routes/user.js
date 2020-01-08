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

// GET an user by id
router.get('/:id', (req, res) => {
  const id = req.params.id;

  connection.query('SELECT * FROM user WHERE id = ?', id, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération du user')
    } else {
      res.json(results)
    }
  });
});

//POST to add a new user
router.post('/add', (req, res) => {
  const userData = req.body;
  
  connection.query('INSERT INTO user SET ?', userData, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de l'ajout du user")
    } else {
      res.status(201).send(`User ${userData.first_name} ${userData.last_name} added`)
    }
  });
});

router.delete('/delete/:id', (req, res) => {
  const deleteId = req.params.id;

  connection.query('DELETE FROM user WHERE id = ?', deleteId, (err, results) => {
    if (err) {
      console.log(err)
      res.status(500).send('Erreur lors de la suppression du user')
    } else {
      res.status(200).send(`User has been successfully deleted from database`)
    }
  });
});


module.exports = router;