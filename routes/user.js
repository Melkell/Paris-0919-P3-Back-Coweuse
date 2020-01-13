const connection = require('../conf');


// GET role name
const getRoleName = (req, res) => {
  connection.query('SELECT name FROM role', (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des noms de rôle")
    } else {
      res.json(results)
    }
  });
}

// GET exploitation name
const getExploitationName = (req, res) => {
  connection.query('SELECT name FROM exploitation', (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des noms des exploitations")
    } else {
      res.json(results)
    }
  });
}

// POST a new user
const addUser = (req, res) => {

  const userData = req.body

  connection.query('INSERT INTO user SET ?', userData, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de l'ajout du user")
    } else {
      res.json(results).send("User ajouté")
    }
  });
}

// MODIFY a user
const updateUser = (req, res) => {

  const userId = req.params.id;
  const userData = req.body;

  connection.query('UPDATE user SET ? WHERE id = ?', [userData, userId], (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la modification du user");
    } else {
      res.status(200).send('User modifié');
    }
  });
}

// DELETE a user
const deleteUser = (req, res) => {
  
  const userId = req.params.id;

  connection.query('DELETE FROM user WHERE id = ?', userId, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la suppression du user')
    } else {
      res.status(200).send("User supprimé")
    }
  });
}

module.exports = {
  getRoleName,
  getExploitationName,
  addUser,
  updateUser,
  deleteUser
}