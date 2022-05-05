const express = require('express');
const asyncHandler = require('express-async-handler');
const { Ticket } = require('../../db/models')

const router = express.Router();

//GET ALL TICKETS
router.get('/', asyncHandler(async (req, res) => {
    const tickets = await Ticket.findAll()
    res.json(tickets)
}));

//CREATE A NEW TICKET -- POST /api/ticket/new
router.post('/new', asyncHandler(async (req, res) => {
    console.log('INSIDE OF API TICKETS')
    console.log(req.body)
    const ticket = await Ticket.create(req.body)
    return res.json({
        ticket
    })
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const ticket = await Ticket.findByPk(req.params.id)
    await ticket.destroy()
    return;
}))

module.exports = router;