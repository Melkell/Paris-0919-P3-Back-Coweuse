const router = require('express').Router();

const exploitation = require('./exploitation');
const user = require('./user');
const equipement = require('./equipement');
const itineraire = require('./itineraire')
const mission = require('./mission');




// Dashboard admin
router.get('/exploitation/:id', exploitation.getExploitationById)
router.get('/exploitation/:id/nb-parcelles', exploitation.getNumberParcellesByExploitationId)
router.get('/exploitation/:id/nb-productions', exploitation.getNumberProductionsByExploitationId)
router.get('/exploitation/:id/nb-users', exploitation.getNumberUsersByExploitationId)

// Calendar admin
// router.get('/exploitation/:id/production', exploitation.getProductionByExploitationId)

// Ressources (users) admin
router.post('/user/add', user.addUser);
router.put('/user/update/:id', user.updateUser);
router.delete('/user/delete/:id', user.deleteUser);
// Ressources (equipements) admin
router.post('/equipement/add', equipement.addEquipement);
router.put('/equipement/update/:id', equipement.updateEquipement);
router.delete('/equipement/delete/:id', equipement.deleteEquipement);


router.get('/equipement/sous-type', equipement.getSousType)
router.get('/equipement/sous-type/type', equipement.getType)


// Itineraire admin
router.post('/mission/add', mission.addMission);
router.put('/mission/update/:id', mission.updateMission);
router.delete('/mission/delete/:id', mission.deleteMission);


router.post('/itineraire/add', itineraire.addItineraire);
router.put('/itineraire/update/:id', itineraire.updateItineraire);
router.delete('/itineraire/delete/:id', itineraire.deleteItineraire);

// router.put('/user', user.updateUserById);
// router.put('/production', production.updateProductionById)
// router.use('/production', production)

module.exports = router;