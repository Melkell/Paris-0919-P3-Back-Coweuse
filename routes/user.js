const connection = require('../conf');

// GET all users
const getUsers = (req, res) => {
  connection.query('SELECT * FROM user', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des users')
    } else {
      res.json(results)
    }
  });
}

// // GET a user by id
// router.get('/:id', (req, res) => {
//   const id = req.params.id;

//   connection.query('SELECT * FROM user WHERE id = ?', id, (err, results) => {
//     if (err) {
//       res.status(500).send('Erreur lors de la récupération du user')
//     } else {
//       res.json(results)
//     }
//   });
// });

// // GET a user's mission
// router.get('/:user_id/mission', (req, res) => {
//   const userId = req.params.user_id;

//   connection.query('SELECT * FROM mission_user WHERE user_id = ? ', userId, (err, results) => {
//     if (err) {
//       console.log(err)
//       res.status(500).send('Erreur lors de la récupération de la mission du user')
//     } else {
//       res.json(results)
//     }
//   });
// });

// // POST to add a new user
// router.post('/add', (req, res) => {
//   const userData = req.body;
  
//   connection.query('INSERT INTO user SET ?', userData, (err, results) => {
//     if (err) {
//       res.status(500).send("Erreur lors de l'ajout du user")
//     } else {
//       res.status(201).send(`User ${userData.first_name} ${userData.last_name} added`)
//     }
//   });
// });

// // MODIFY a user
// router.put('/:id/modify', (req, res) => {
//   const userId = req.params.id;
//   const userData = req.body;

//   connection.query('UPDATE user SET ? WHERE id = ?', [userData, userId], (err, results) => {
//     if (err) {
//       res.status(500).send("Erreur lors de la modification du user");
//     } else {
//       res.status(200).send('User modifié');
//     }
//   });
// });


// // DELETE a user
// router.delete('/delete/:id', (req, res) => {
//   const deleteId = req.params.id;

//   connection.query('DELETE FROM user WHERE id = ?', deleteId, (err, results) => {
//     if (err) {
//       console.log(err)
//       res.status(500).send('Erreur lors de la suppression du user')
//     } else {
//       res.status(200).send(`Le user a bien été supprimé`)
//     }
//   });
// });


module.exports = {
  getUsers
}