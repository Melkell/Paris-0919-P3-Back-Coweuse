const router = require('express').Router();

const exploitation = require('./exploitation');
const user = require('./user');
const equipement = require('./equipement');

// const parcelle = require('./parcelle');
// const production = require('./production')



// Dashboard admin
router.get('/exploitation/:id', exploitation.getExploitationById)
router.get('/exploitation/:id/parcelles', exploitation.getNumberParcellesByExploitationId)
router.get('/exploitation/:id/productions', exploitation.getNumberProductionsByExploitationId)
router.get('/exploitation/:id/users', exploitation.getNumberUsersByExploitationId)

// Ressources (users) admin
router.post('/user/create', user.createUser);
router.put('/user/update/:id', user.updateUser);
router.delete('/user/delete/:id', user.deleteUser);
// Ressources (equipements) admin
router.post('/equipement/create', equipement.createEquipement);
router.put('/equipement/update/:id', equipement.updateEquipement);
router.delete('/equipement/delete/:id', equipement.deleteEquipement);




// router.put('/user', user.updateUserById);
// router.put('/production', production.updateProductionById)
// router.use('/production', production)

module.exports = router;