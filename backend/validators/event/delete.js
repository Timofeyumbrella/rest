const { param } = require("express-validator");
const validate = require("../../middleware/validate");

const deleteValidator = [
  param("id")
    .isInt({ min: 1 })
    .toInt()
    .withMessage("Your id must be a positive number"),
  validate,
];

module.exports = deleteValidator;
