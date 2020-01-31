const connection = require('../conf');


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
  getMissionInfo,
  getMissionSousType,
  getTools,
  getDateOfUseEquipment
}