const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth.js')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation.js')
const { Event } = require('../../db/models')

const router = express.Router();

const validateEventCreation = [
    check('name')
        .exists({checkFalsy: true})
        .isLength({max: 255})
        .withMessage('Name of event must not be over 255 characters'),
    check('description')
        .exists({checkFalsy: true})
        .withMessage('Please provide a description for the event.'),
    check('location')
        .exists({checkFalsy: true})
        .withMessage('Your event must have a location'),
    check('capacity')
        .exists({checkFalsy: true}),
    handleValidationErrors
];

//GET ALL THE EVENTS -- GET /api/events
router.get('/', asyncHandler(async (req, res) => {
    const events = await Event.findAll()
    res.json(events)
}));

//CREATE A NEW EVENT -- POST /api/events 
router.post('/new', validateEventCreation, requireAuth, asyncHandler(async (req, res) => {
    const event = await Event.create(req.body)
    return res.json({
        event
    });
}))

router.put('/:id/edit', validateEventCreation, requireAuth, asyncHandler(async (req, res) => {
    const { id, hostId, name, categoryId, description, date, location} = req.body
    console.log(req.body)
    const event = await Event.findByPk(id)
    event.name = name
    event.description = description
    event.date = date
    event.location = location
    event.categoryId = categoryId
    await event.save()
    
    }));

router.delete('/:id', asyncHandler(async (req, res) => {
    const event = await Event.findByPk(req.params.id)
    event.destroy()
}))




module.exports = router;