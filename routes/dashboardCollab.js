const connection = require('../conf');

const getMissions = (req, res) => {
  connection.query('SELECT * FROM mission WHERE validation = 0', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des missions');
    } else {
      res.json(results);
    }
  });
};

const putMissions = (req, res) => {
  const startDate = (req.body.startDateTime).split('Z')[0]
  const endDate = (req.body.endDateTime).split('Z')[0]
  const idNum = req.body.id
  //console.log(idNum)
  //console.log(startDate)
  //console.log(endDate)
  connection.query(`UPDATE mission SET start_date = ?, end_date = ?, validation = 1 WHERE id = ?`, [startDate, endDate, idNum], (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de l'update 'missions`);
    } else {
      res.status(200).send(`Ajout mission`);
    }
  });
};

const getEquipements = (req, res) => {
  connection.query('SELECT * FROM equipement', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des equipements');
    } else {
      res.json(results);
    }
  });
};

const getMissionById = (req, res) => {
  const missionId = req.params.id;

<<<<<<< HEAD
  connection.query('SELECT * FROM mission INNER JOIN mission_user WHERE user_id = ?', missionId, (err, results) => {
=======
  connection.query('SELECT * FROM mission WHERE validation = 1', (err, results) => {
>>>>>>> dd2ec2ff34a3de7f0ce0483b8cdb80eca1d8f0aa
    if (err) {
      res.status(500).send('Erreur lors de la récupération des missions');
    } else {
      res.json(results);
    }
  });
};

const getEquipementById = (req, res) => {
  const equipementId = req.params.id;

  connection.query('SELECT name FROM equipement INNER JOIN mission_equipement WHERE mission_id = ?', equipementId, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des outils de la mission')
    } else {
      res.json(results);
    }
  });
}

const getTasksById = (req, res) => {
  const taskId = req.params.id

  connection.query('SELECT * FROM tache WHERE id = ?', taskId, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des tâches');
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  getMissionById,
  getTasksById,
<<<<<<< HEAD
  getEquipementById
=======
  getMissions,
  getEquipements,
  putMissions
>>>>>>> dd2ec2ff34a3de7f0ce0483b8cdb80eca1d8f0aa
}