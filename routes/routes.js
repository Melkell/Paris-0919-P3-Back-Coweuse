const router = require('express').Router();
const user = require('./user');
const production = require('./production')

router.get('/user', user.getUsers);
// router.put('/user', user.updateUserById);
// router.put('/production', production.updateProductionById)
// router.use('/production', production)

module.exports = router;