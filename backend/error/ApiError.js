const httpStatusCodes = require("./httpStatusCodes");

class ApiError extends Error {
  constructor(status, description) {
    super(status);

    this.description = description || httpStatusCodes[status];
  }
}

module.exports = ApiError;
