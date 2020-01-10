const connection = require('../conf');

const getMissionById = (req, res) => {
  const missionId = req.params.id
  connection.query('SELECT * FROM mission WHERE id = ?', missionId, (err, results) => {
    if(err) {
      console.log(err)
      res.status(500).send('Erreur lors de la récupération des missions');
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  getMissionById
}