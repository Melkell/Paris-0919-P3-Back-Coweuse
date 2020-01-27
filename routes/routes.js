const router = require('express').Router();
const exploitation = require('./exploitation');
const parcelle = require('./parcelle')
const production = require('./production')
const user = require('./user');
const equipement = require('./equipement');
const itineraire = require('./itineraire')
const mission = require('./mission');
const dashboardCollab = require('./dashboardCollab');
const missionCollab = require('./missionCollab');
const productionCollab = require('./productionCollab');
const auth = require('./auth')
const register = require('./register');

// Authentification
router.post('/auth', auth);
router.post('/register', register);


// Dashboard admin
router.get('/exploitation/name', exploitation.getExploitationName);
router.get('/exploitation/:id', exploitation.getExploitationById);
router.get('/exploitation/:id/nb-parcelles', exploitation.getNumberParcellesByExploitationId);
router.get('/exploitation/:id/nb-productions', exploitation.getNumberProductionsByExploitationId);
router.get('/exploitation/:id/nb-users', exploitation.getNumberUsersByExploitationId);


// Ressources (users) admin
// GET list
router.get('/exploitation/:id/all-users', exploitation.getAllUsersByExploitationId);
router.get('/exploitation/name', exploitation.getExploitationName);
router.get('/user/add/role-name', user.getRoleName);
// POST - PUT - DELETE
router.post('/user/add', user.addUser);
router.put('/user/update/:id', user.updateUser);
router.delete('/user/delete/:id', user.deleteUser);


// Ressources (equipements) admin
// GET list
router.get('/exploitation/name', exploitation.getExploitationName);
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
router.get('/production/All', production.getProduction)
router.get('/exploitation/:id/all-parcelles', exploitation.getAllParcellesByExploitationId);
// POST - PUT - DELETE parcelle
router.post('/parcelle/add', parcelle.addParcelle);
router.put('/parcelle/update/:id', parcelle.updateParcelle);
router.delete('/parcelle/delete/:id', parcelle.deleteParcelle);
// POST - PUT - DELETE itineraire
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

// GET infos production by month
// router.get('/itineraire/:id/missions/:month/:year', itineraire.getMissionsbyItineraireIdAndMonth)

router.get('/equipement/sous-type', equipement.getSousType);
router.get('/equipement/sous-type/type', equipement.getType);


// router.put('/user', user.updateUserById);
// router.put('/production', production.updateProductionById)
// router.use('/production', production)

// Dashboard collaborateur
router.get('/dashboard/mission/:id', dashboardCollab.getMissionById);
router.get('/dashboard/task/:id', dashboardCollab.getTasksById);

// Missions collaborateur
router.get('/mission/:id', missionCollab.getMissionInfo);
router.get('/mission/soustype/:mission_id', missionCollab.getMissionSousType);
router.get('/mission/outil/:id', missionCollab.getTools);
router.get('/mission/equipement/:equipement_id', missionCollab.getDateOfUseEquipment);

// Agenda collaborateur
router.get('/agenda/production/:id', productionCollab.getProduction);

module.exports = router;