const connection = require('../conf');

// POST a new itineraire
const addItineraire = (req, res) => {

    const itineraireData = req.body
  
    connection.query('INSERT INTO itineraire SET ?', itineraireData, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de l'ajout de l'itinéraire")
      } else {
        res.json(results).send("Itineraire ajouté")
      }
    });
  }
  
  // MODIFY a itineraire
  const updateItineraire = (req, res) => {
  
    const itineraireId = req.params.id;
    const itineraireData = req.body;
  
    connection.query('UPDATE itineraire SET ? WHERE id = ?', [itineraireData, itineraireId], (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la modification de l'itinéraire");
      } else {
        res.status(200).send('Itineraire modifié');
      }
    });
  }
  
  // DELETE a itineraire
  const deleteItineraire = (req, res) => {
    
    const itineraireId = req.params.id;
  
    connection.query('DELETE FROM itineraire WHERE id = ?', itineraireId, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la suppression de l'itinéraire")
      } else {
        res.status(200).send("Itineraire supprimé")
      }
    });
  }
  
  module.exports = {
    addItineraire,
    updateItineraire,
    deleteItineraire
  }