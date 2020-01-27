const connection = require('../conf');

const getMissionById = (req, res) => {
  const missionId = req.params.id;

  connection.query('SELECT * FROM mission INNER JOIN mission_user WHERE user_id = ?', missionId, (err, results) => {
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
  getEquipementById
}