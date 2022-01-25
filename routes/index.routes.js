const router = require('express').Router();
const equipagesRouter = require('./equipages.routes');

router.use('/equipages', equipagesRouter);

module.exports = router;