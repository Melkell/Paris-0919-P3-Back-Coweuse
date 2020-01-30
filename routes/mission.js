const connection = require('../conf');


// POST a new mission
const addMission = (req, res) => {

  const missionData = req.body
  console.log('First test')

  // Add all missions
  connection.query('SELECT COUNT(*) FROM parcelle', (err, result) => {
    if (err) {
      res.sendStatus(500)
    }
    else {
      const nbParcelles = result
      console.log(result)
      for (let i = 0; i < nbParcelles; i++) {
        connection.query('INSERT INTO missions (name) VALUES (?)', missionData, (err2, result2) => {
          if (err2) {
            res.sendStatus(500)
          }
          else {
            res.status(200).send('Les missions de la production ont bien été ajoutées.')
          }
        })
      }
    }
  })
}

// MODIFY a mission
const updateMission = (req, res) => {

  const missionId = req.params.id;
  const missionData = req.body;

  connection.query('UPDATE mission SET ? WHERE id = ?', [missionData, missionId], (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la modification de la mission");
    } else {
      res.status(200).send('Mission modifié');
    }
  });
}

// DELETE a mission
const deleteMission = (req, res) => {

  const missionId = req.params.id;

  connection.query('DELETE FROM mission WHERE id = ?', missionId, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la suppression de la mission')
    } else {
      res.status(200).send("Mission supprimé")
    }
  });
}


module.exports = {
  addMission,
  updateMission,
  deleteMission
}