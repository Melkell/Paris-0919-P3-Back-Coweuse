const connection = require('../conf');


// GET all missions by exploitation id
const getAllMissionsByItineraireId = (req, res) => {

  const itineraireId = req.params.id

  connection.query('SELECT mission.* FROM mission JOIN mission_type ON mission.mission_type_id = mission_type.id WHERE itineraire_id = ?', itineraireId, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des missions d'un itineraire")
    } else {
      res.json(results)
    }
  });
}


// const getMissionsbyItineraireIdAndMonth = (req, res) => {

//   const itineraireId = req.params.id
//   const month = +req.params.month
//   const year = +req.params.year

//   const startMonth = `${year}-${month}-01`
//   let endMonth = `${year}-${month+1}-01`
//   if (month == 12) {
//     endMonth = `${year+1}-01-01`
//   } else {

//   }

//   connection.query('SELECT mission.* FROM mission JOIN mission_type ON mission.mission_type_id = mission_type.id WHERE (mission.start_date >= ? AND mission.end_date <= ?) mission_type.itineraire_id = ?', itineraireId, startMonth, endMonth, (err, results) => {
//     if (err) {
//       console.log('err', err);
//       res.status(500).send("Erreur lors de la récupération des missions d'un itineraire")
//     } else {
//       res.json(results)
//     }
//   });
// }

// POST a new itineraire
const addItineraire = (req, res) => {
  const itineraireData = req.body
  const parcelles = itineraireData.nbParcelles
  const task = itineraireData.nbTask
  for (const parcelle of parcelles) {
    for (let i = 0; i < task; i++) {
      const tache = i
      const terrain = parcelle
      connection.query(`INSERT INTO mission (name, tache_id, parcelle_id, itineraire_id, validation)
      VALUES (
        'mission',
      (SELECT id
         FROM tache
         WHERE tache.id = 1
        ),
      (SELECT id
         FROM parcelle
         WHERE parcelle.id = 1
        ),
      (SELECT id
         FROM itineraire
         WHERE itineraire.id = 1
        ),
        0
      )
      `, [tache], (err) => {
        if (err) {
          res.status(500).send("Erreur lors de l'ajout de l'itinéraire")
        }
      });
    }
  }
}

// MODIFY an itineraire
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

// DELETE an itineraire
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
  getAllMissionsByItineraireId,
  // getMissionsbyItineraireIdAndMonth,
  addItineraire,
  updateItineraire,
  deleteItineraire
}