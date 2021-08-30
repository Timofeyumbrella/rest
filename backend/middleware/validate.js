const { validationResult } = require("express-validator");

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

module.exports = validate;
