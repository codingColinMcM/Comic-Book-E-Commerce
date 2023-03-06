const router = require('express').Router();
const userroutes = require('./userroutes.js');
const messageRoutes = require('./messageroutes.js');

router.use('/users', userroutes);
router.use('/messages', messageRoutes);

module.exports = router;