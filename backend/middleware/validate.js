const { validationResult, matchedData } = require("express-validator");
const { createValidator, updateValidator } = require("../utils/validator");

async function validateCreate(req, res, next) {
  await Promise.all(createValidator.map((validator) => validator.run(req)));

  validate(req, res, next);
}

async function validateUpdate(req, res, next) {
  await Promise.all(updateValidator.map((validator) => validator.run(req)));

  validate(req, res, next);
}

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  res.status(422).json({
    status: "fail",
    errors: errors.array(),
  });
};

module.exports = {
  validateCreate,
  validateUpdate,
};
