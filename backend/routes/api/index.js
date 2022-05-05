const router = require("express").Router();
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const eventsRouter = require('./events.js')
const categoriesRouter = require('./categories')
const ticketsRouter = require('./tickets')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/events', eventsRouter);
router.use('/categories', categoriesRouter)
router.use('/tickets', ticketsRouter)

module.exports = router;
