const { body } = require("express-validator");
const validate = require("../../middleware/validate");

const followValidator = [
  body("userId").isInt({ min: 1 }).toInt(),
  body("eventId").isInt({ min: 1 }).toInt(),
  validate,
];

module.exports = followValidator;
