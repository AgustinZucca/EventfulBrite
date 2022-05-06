
const { check } = require("express-validator");
const db = require("../db/models");
const { handleValidationErrors } = require("./validation");
const userValidators = [
  check("username")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a username.")
    .isLength({ max: 20 })
    .withMessage("Username must not be greater than 20 characters long.").custom((value) => {
      return db.User.findOne({ where: { username: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided username is already in use by another account."
          );
        }
      });
    }),
  check("email")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an email address.")
    .isLength({ max: 100 })
    .withMessage("Email address must not be greater than 100 characters long.")
    .isEmail()
    .withMessage("Email address is not a valid email.")
    .custom((value) => {
      return db.User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The provided email address is already in use by another account."
          );
        }
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password"),
    handleValidationErrors
];

module.exports = {userValidators};