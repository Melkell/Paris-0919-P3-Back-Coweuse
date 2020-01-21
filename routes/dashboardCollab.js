const connection = require('../conf');

const getMissions = (req, res) => {
  connection.query('SELECT * FROM mission', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des missions');
    } else {
      res.json(results);
    }
  });
};

const putMissions = (req, res) => {
  const startDate = req.body.startDateTime
  console.log(startDate.split("T"))
  connection.query('UPDATE mission SET start_date WHERE id === 1', [startDate], (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des missions');
    } else {
      res.json(results);
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

  connection.query('SELECT * FROM mission WHERE id = ?', missionId, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des missions');
    } else {
      res.json(results);
    }
  });
};

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
  getMissions,
  getEquipements,
  putMissions
}