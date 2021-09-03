const ApiError = require("../error/ApiError");

module.exports = (err, _, res, __) => {
  if (err instanceof ApiError) {
    return res.status(err.message).json({
      status: "fail",
      description: err.description,
    });
  }

  res.status(500).json({
    status: "error",
    description: "Internal Server Error",
  });
};
