const express = require('express');
const asyncHandler = require('express-async-handler');
const { Category } = require('../../db/models')

const router = express.Router();


//GET ALL THE Categories -- GET /api/events
router.get('/', asyncHandler(async (req, res) => {
    const categories = await Category.findAll()
    res.json(categories)
}))

module.exports = router;