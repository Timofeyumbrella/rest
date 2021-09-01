const { body, param } = require("express-validator");
const validate = require("../../middleware/validate");

const updateValidator = [
  param("id")
    .isInt({ min: 1 })
    .toInt()
    .withMessage("Your id must be a positive number"),
  body("title")
    .isString()
    .trim()
    .isLength({ min: 5, max: 55 })
    .escape()
    .withMessage("title must be 5 characters min and 55 characters max"),
  body("price").isDecimal({ decimal_digits: "1,2" }).toFloat().withMessage(""),
  body("description")
    .isString()
    .trim()
    .isLength({ min: 15, max: 250 })
    .escape()
    .withMessage(
      "description must be 15 characters min and 250 characters max"
    ),
  body("date")
    .isDate()
    .toDate()
    .withMessage("Date should represent Date Time String Format"),
  validate,
];

module.exports = updateValidator;
