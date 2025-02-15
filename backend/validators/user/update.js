const { body, param, header } = require("express-validator");
const validate = require("../../middleware/validate");

const updateValidator = [
  header("authorization")
    .isString()
    .withMessage("provided token should be a string"),
  param("id")
    .isInt({ min: 1 })
    .toInt()
    .withMessage("id must be postive number"),
  body("name")
    .isString()
    .trim()
    .isLength({ min: 3, max: 55 })
    .escape()
    .withMessage("name must be 3 characters min and 55 characters max"),
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

  body("password")
    .isString()
    .isStrongPassword({ minSymbols: 0 })
    .withMessage(
      "password must include at least one lowercase letter, uppercase letter and a number"
    ),
  body("roleId")
    .isInt({ min: 1, max: 2 })
    .toInt()
    .withMessage("Role id should either be 1 or 2"),
  validate,
];

module.exports = updateValidator;
