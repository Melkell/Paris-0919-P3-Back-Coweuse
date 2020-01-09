const router = require('express').Router();
const user = require('./user');
const exploitation = require('./exploitation');
const parcelle = require('./parcelle');
const production = require('./production')

router.get('/user', user.getUsers);
router.get('/exploitation/:id', exploitation.getExploitationById)
router.get('/exploitation/:id/parcelles', exploitation.getNumberParcellesByExploitationId)
router.get('/exploitation/:id/productions', exploitation.getNumberProductionsByEploitationId)
// router.put('/user', user.updateUserById);
// router.put('/production', production.updateProductionById)
// router.use('/production', production)

module.exports = router;