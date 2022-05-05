const express = require("express");
const asyncHandler = require("express-async-handler");
const { Ticket } = require("../../db/models");
const { Event } = require("../../db/models");

const router = express.Router();

//GET ALL TICKETS for a specific user
router.get(
  "/:userId",
  asyncHandler(async (req, res) => {
    const tickets = await Ticket.findAll({
      where: {
        userId: req.params.userId,
      },
      include: 
        {
          model: Event,
        }
    });
    res.json(tickets);
  })
);

//CREATE A NEW TICKET -- POST /api/ticket/new
router.post(
  "/new",
  asyncHandler(async (req, res) => {
    const ticket = await Ticket.create(req.body);
    return res.json({
      ticket,
    });
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const ticket = await Ticket.findByPk(req.params.id);
    await ticket.destroy();
    return;
  })
);

module.exports = router;
