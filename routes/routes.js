const router = require('express').Router();

const exploitation = require('./exploitation');
const user = require('./user');
const equipement = require('./equipement');
const itineraire = require('./itineraire')
const mission = require('./mission');


// Dashboard admin
router.get('/exploitation/:id', exploitation.getExploitationById);
router.get('/exploitation/:id/nb-parcelles', exploitation.getNumberParcellesByExploitationId);
router.get('/exploitation/:id/nb-productions', exploitation.getNumberProductionsByExploitationId);
router.get('/exploitation/:id/nb-users', exploitation.getNumberUsersByExploitationId);


// Ressources admin



// Itineraire admin



// Calendar admin
// router.get('/exploitation/:id/production', exploitation.getProductionByExploitationId)

// Ressources (users) admin
// GET list
router.get('/exploitation/:id/all-users', exploitation.getAllUsersByExploitationId);
router.get('/user/add/role-name', user.getRoleName);
router.get('/user/add/exploitation-name', user.getExploitationName);
// POST - PUT - DELETE
router.post('/user/add', user.addUser);
router.put('/user/update/:id', user.updateUser);
router.delete('/user/delete/:id', user.deleteUser);

// Ressources (equipements) admin
// GET list
router.get('/exploitation/:id/all-equipements', exploitation.getAllEquipementsByExploitationId);
router.get('/equipement/sous-type', equipement.getSousType);
router.get('/equipement/sous-type/type', equipement.getType);
// POST - PUT - DELETE
router.post('/equipement/add', equipement.addEquipement);
router.put('/equipement/update/:id', equipement.updateEquipement);
router.delete('/equipement/delete/:id', equipement.deleteEquipement);


// Itineraire admin
// GET list
router.get('/exploitation/:id/all-itineraires', exploitation.getAllItinerairesByExploitationId)
// POST - PUT - DELETE
router.post('/itineraire/add', itineraire.addItineraire);
router.put('/itineraire/update/:id', itineraire.updateItineraire);
router.delete('/itineraire/delete/:id', itineraire.deleteItineraire);

// Mission admin
// GET list
router.get('/exploitation/:id/all-missions', exploitation.getAllMissionsByExploitationId)
router.get('/itineraire/:id/all-missions', itineraire.getAllMissionsByItineraireId)
// POST - PUT - DELETE
router.post('/mission/add', mission.addMission);
router.put('/mission/update/:id', mission.updateMission);
router.delete('/mission/delete/:id', mission.deleteMission);


// router.put('/user', user.updateUserById);
// router.put('/production', production.updateProductionById)
// router.use('/production', production)

module.exports = router;