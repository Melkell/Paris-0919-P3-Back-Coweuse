const connection = require('../conf');

// POST a new mission
const addMission = (req, res) => {
  const missionData = req.body
  // Add all missions
  connection.query('INSERT INTO mission SET ?', missionData, (err, result) => {
    if (err) {
      throw err
      res.sendStatus(500)
    }
    else {
      res.status(200).send('Les missions de la production ont bien été ajoutées.')
    }
  })
}

const getMissionInfo = (req, res) => {
  const missionId = req.params.id;

  connection.query('SELECT * FROM mission WHERE id = ?', missionId, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération de la mission');
    } else {
      res.json(results);
    }
  });
};

const getMissionSousType = (req, res) => {
  const missionSousType = req.params.mission_id;
  
  connection.query('SELECT * FROM mission_sous_type WHERE mission_id = ?', missionSousType, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération du sous type de la mission');
    } else {
      res.json(results);
    }
  });
};

const getTools = (req, res) => {
  const missionTool = req.params.id;
  
  connection.query('SELECT * FROM sous_type WHERE id = ?', missionTool, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des outils');
    } else {
      res.json(results);
    }
  });
};

const getDateOfUseEquipment = (req, res) => {
  const dateOfUseEquipment = req.params.equipement_id;

  connection.query('SELECT * FROM mission_equipement WHERE equipement_id = ?', dateOfUseEquipment, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération dun outil');
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  addMission,
  getMissionInfo,
  getMissionSousType,
  getTools,
  getDateOfUseEquipment
}