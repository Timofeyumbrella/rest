const { query, header } = require("express-validator");
const validate = require("../../middleware/validate");

const findAllValidator = [
  header("authorization")
    .isString()
    .withMessage("provided token should be a string"),
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
