const router = require('express').Router();
const comicRoutes = require('./comicRoutes');

router.use('/comics', comicRoutes);

module.exports = router;