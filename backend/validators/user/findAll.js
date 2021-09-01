const { query } = require("express-validator");
const validate = require("../../middleware/validate");

const findAllValidator = [
  query("page")
    .optional()
    .isInt({ min: 1 })
    .toInt()
    .withMessage("page must be a positive number"),
  query("limit")
    .optional()
    .isInt({ min: 1 })
    .toInt()
    .withMessage("limit must be a positive number"),
  validate,
];

module.exports = findAllValidator;
