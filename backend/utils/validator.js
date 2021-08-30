const { body } = require("express-validator");

const createValidator = [
  body("title")
    .isLength({ min: 5, max: 55 })
    .withMessage("title must be at least 5 characters long"),
  body("price").isNumeric().withMessage("price must be a number"),
  body("description")
    .isLength({ min: 15, max: 250 })
    .withMessage("description must be at least 15 characters long"),
];

const updateValidator = [
  body("title")
    .isLength({ min: 5, max: 55 })
    .withMessage("title must be at least 5 characters long"),
  body("price").isNumeric().withMessage("price must be a number"),
  body("description")
    .isLength({ min: 15, max: 250 })
    .withMessage("description must be at least 15 characters long"),
];

module.exports = {
  createValidator,
  updateValidator,
};
