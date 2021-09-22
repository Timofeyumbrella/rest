const { body } = require("express-validator");
const validate = require("../../middleware/validate");

const createValidator = [
  body("userId")
    .isInt({ min: 1 })
    .toInt()
    .withMessage("user id must be a positive number"),
  body("eventId")
    .isInt({ min: 1 })
    .toInt()
    .withMessage("event id must be a positive number"),
  validate,
];

module.exports = createValidator;
