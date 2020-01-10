const connection = require('../conf');

const getMissionById = (req, res) => {
  connection.query('SELECT * FROM mission WHERE id = ?', (err, results) => {
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