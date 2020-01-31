const connection = require('../conf');


// POST a new parcelle
const addParcelle = (req, res) => {

	const parcelleData = req.body

	connection.query('INSERT INTO parcelle SET ?', parcelleData, (err, results) => {
		if (err) {
			res.status(500).send("Erreur lors de l'ajout de la parcelle")
		} else {
			res.json(results).send("Parcelle ajoutée")
		}
	});
}
    
// MODIFY a parcelle
const updateParcelle = (req, res) => {

	const parcelleId = req.params.id;
	const parcelleData = req.body;

	connection.query('UPDATE parcelle SET ? WHERE id = ?', [parcelleData, parcelleId], (err, results) => {
		if (err) {
			res.status(500).send("Erreur lors de la modification de la parcelle");
		} else {
			res.status(200).send('Parcelle modifiée');
		}
	});
}
    
// DELETE a parcelle
const deleteParcelle = (req, res) => {
	
	const parcelleId = req.params.id;

	connection.query('DELETE FROM parcelle WHERE id = ?', parcelleId, (err, results) => {
		if (err) {
			res.status(500).send("Erreur lors de la suppression de la parcelle")
		} else {
			res.status(200).send("Parcelle supprimée")
		}
	});
}
  
  
module.exports = {
	addParcelle,
	updateParcelle,
	deleteParcelle
}