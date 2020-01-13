const connection = require('../conf');


// GET name of production
const getProductionName = (req, res) => {
	connection.query('SELECT name FROM production', (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des noms des productions")
    } else {
      res.json(results)
    }
  });
}


module.exports = {
	getProductionName
}