const { validationResult, matchedData } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    req.validated = matchedData(req);

    return next();
  }

  res.status(422).json({
    status: "fail",
    errors: errors.array(),
  });
};

module.exports = validate;
