const connection = require('../conf');


// GET name of production
const getProduction = (req, res) => {
	connection.query('SELECT * FROM production', (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des productions")
    } else {
      res.json(results)
    }
  });
}


module.exports = {
	getProduction
}