const connection = require('../conf')

const getProduction = (req, res) => {
  const getProductionById = req.params.id;

  connection.query('SELECT * FROM production WHERE id = ?', getProductionById, (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des productions')
    } else {
      res.json(results)
    }
  });
};

module.exports = {
  getProduction
}