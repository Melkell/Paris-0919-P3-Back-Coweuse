const router = require('express').Router();
const user = require('./user');
const exploitation = require('./exploitation');

// const parcelle = require('./parcelle');
// const production = require('./production')

// Dashboard admin
router.get('/exploitation/:id', exploitation.getExploitationById)
router.get('/exploitation/:id/parcelles', exploitation.getNumberParcellesByExploitationId)
router.get('/exploitation/:id/productions', exploitation.getNumberProductionsByExploitationId)
router.get('/exploitation/:id/users', exploitation.getNumberUsersByExploitationId)

// Ressources admin
router.get('/user/create', user.createUser);
router.get('/user/update', user.updateUser);
router.get('/user/delete', user.deleteUser);


// router.put('/user', user.updateUserById);
// router.put('/production', production.updateProductionById)
// router.use('/production', production)

module.exports = router;