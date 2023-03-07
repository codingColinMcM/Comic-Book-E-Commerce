const router = require('express').Router();
const userroutes = require('./profileRoutes.js');
const messageRoutes = require('./messageroutes.js');

router.use('/profiles', profileRoutes);
router.use('/messages', messageRoutes);

module.exports = router;