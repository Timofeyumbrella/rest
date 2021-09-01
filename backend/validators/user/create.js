const { body } = require("express-validator");
const validate = require("../../middleware/validate");

const createValidator = [
  body("name")
    .isString()
    .trim()
    .isLength({ min: 5, max: 15 })
    .escape()
    .withMessage("name must be 5 characters min and 15 characters max"),
  body("age")
    .isInt({ min: 12 })
    .toInt()
    .withMessage("user must be at least 12 years old to proceed"),
  body("email")
    .isString()
    .isEmail()
    .trim()
    .escape()
    .withMessage("you must provide valid email"),
  body("gender")
    .isString()
    .trim()
    .escape()
    .withMessage("gender must be a string"),
  body("role")
    .isString()
    .trim()
    .isLength({ min: 4 })
    .escape()
    .withMessage("role must be a string of 4+ characters"),
  body("password")
    .isString()
    .isStrongPassword({ minSymbols: 0 })
    .withMessage(
      "password must include at least one lowercase letter, uppercase letter and a number"
    ),
  validate,
];

module.exports = createValidator;
