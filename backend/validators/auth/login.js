const { body } = require("express-validator");
const validate = require("../../middleware/validate");

const loginValidator = [
  body("email")
    .isString()
    .isEmail()
    .trim()
    .escape()
    .withMessage("you must provide valid email"),
  body("password")
    .isString()
    .isStrongPassword({ minSymbols: 0 })
    .withMessage(
      "password must include at least one lowercase letter, uppercase letter and a number"
    ),
  validate,
];

module.exports = loginValidator;
