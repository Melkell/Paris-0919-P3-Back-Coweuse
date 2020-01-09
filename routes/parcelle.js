const connection = require('../conf');

// GET number of parcelles by exploitation_id
const countParcelleById = (req, res) => {
	const exploitationId = req.params.exploitation_id
	connection.query('SELECT COUNT(*) FROM parcelle WHERE exploitation_id = ?', exploitationId, (err, results) => {
		if (err) {
			res.status(500).send("Erreur lors de la récupération du nombre de parcelles de l'exploitation")
		} else {
			res.json(results)
		}
	});
}

module.exports = {
	countParcelleById
}