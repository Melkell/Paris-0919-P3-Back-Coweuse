const connection = require('../conf');

const getMissions = (req, res) => {
  connection.query('SELECT * FROM mission WHERE validation = 0 ', (err, results) => {
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
  console.log(startDate)
  console.log(endDate)
  connection.query(`UPDATE mission SET start_date = ?, end_date = ? WHERE id = 1`, [startDate, endDate], (err, results) => {
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

  connection.query('SELECT * FROM mission', (err, results) => {
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