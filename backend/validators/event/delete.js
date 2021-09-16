const { param, header } = require("express-validator");
const validate = require("../../middleware/validate");

const deleteValidator = [
  header("authorization")
    .isString()
    .withMessage("provided token should be a string"),
  param("id")
    .isInt({ min: 1 })
    .toInt()
    .withMessage("Your id must be a positive number"),
  validate,
];

module.exports = deleteValidator;
