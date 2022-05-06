const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth.js')
const { check } = require('express-validator');
const { User } = require('../../db/models');
const { userValidators } = require('../../utils/userValidations.js');

const router = express.Router();

//CREATE A NEW USER -- POST /api/users 
router.post('/', userValidators, asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({email, password, username})

    if (!user) {
        const err = new Error("Signup failed");
        err.status = 401;
        err.title = "Login failed";
        err.message = ["The provided credentials were invalid"];
        return next(err);
      }

    await setTokenCookie(res, user);

    return res.json({
        user
    });
}))

module.exports = router;