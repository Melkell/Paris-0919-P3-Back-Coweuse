const connection = require('../conf');


// GET sous_type of equipements
const getSousType = (req, res) => {

	connection.query('SELECT * FROM sous_type', (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des sous-types d'équipement")
    } else {
      res.json(results)
    }
  });
}

// GET type of equipements
const getType = (req, res) => {

	connection.query('SELECT * FROM type', (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des types d'équipement")
    } else {
      res.json(results)
    }
  });
}

// POST a new equipement
const addEquipement = (req, res) => {

  const equipementData = req.body

  connection.query('INSERT INTO equipement SET ?', equipementData, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de l'ajout de l'équipement")
    } else {
      res.json(results).send("Equipement ajouté")
    }
  });
}

// MODIFY a equipement
const updateEquipement = (req, res) => {

  const equipementId = req.params.id;
  const equipementData = req.body;

  connection.query('UPDATE equipement SET ? WHERE id = ?', [equipementData, equipementId], (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la modification de l'équipement");
    } else {
      res.status(200).send("Equipement modifié");
    }
  });
}

// DELETE a equipement
const deleteEquipement = (req, res) => {

  const equipementId = req.params.id;

  connection.query('DELETE FROM equipement WHERE id = ?', equipementId, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression de l'équipement")
    } else {
      res.status(200).send("Equipement supprimé")
    }
  });
}


module.exports = {
	getSousType,
	getType,
  addEquipement,
  updateEquipement,
  deleteEquipement
}