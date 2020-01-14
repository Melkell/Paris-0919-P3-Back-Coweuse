const router = require('express').Router();

const exploitation = require('./exploitation');
const user = require('./user');
const equipement = require('./equipement');
const dashboardCollab = require('./dashboardCollab');
const missionCollab = require('./missionCollab');
const productionCollab = require('./productionCollab');

// Dashboard admin
router.get('/exploitation/:id', exploitation.getExploitationById)
router.get('/exploitation/:id/parcelles', exploitation.getNumberParcellesByExploitationId)
router.get('/exploitation/:id/productions', exploitation.getNumberProductionsByExploitationId)
router.get('/exploitation/:id/users', exploitation.getNumberUsersByExploitationId)

// Ressources (users) admin
router.post('/user/add', user.addUser);
router.put('/user/update/:id', user.updateUser);
router.delete('/user/delete/:id', user.deleteUser);
// Ressources (equipements) admin
router.post('/equipement/add', equipement.addEquipement);
router.put('/equipement/update/:id', equipement.updateEquipement);
router.delete('/equipement/delete/:id', equipement.deleteEquipement);


router.get('/equipement/sous-type', equipement.getSousType);
router.get('/equipement/sous-type/type', equipement.getType);

// router.put('/user', user.updateUserById);
// router.put('/production', production.updateProductionById)
// router.use('/production', production)

// Dashboard collaborateur
router.get('/dashboard/mission/:id', dashboardCollab.getMissionById);
router.get('/dashboard/task/:id', dashboardCollab.getTasksById);

// Espace mission collaborateur
router.get('/mission/:id', missionCollab.getMissionInfo);
router.get('/mission/soustype/:mission_id', missionCollab.getMissionSousType);
router.get('/mission/equipement/:equipement_id', missionCollab.getDateOfUseEquipment);

// Espace agenda collaborateur
router.get('/agenda/production/:id', productionCollab.getProduction);

module.exports = router;