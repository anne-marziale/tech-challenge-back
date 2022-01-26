const router = require('express').Router();
const membersRouter = require('./members.routes');

router.use('/members', membersRouter);

module.exports = router;