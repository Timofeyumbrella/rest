const httpStatusCodes = require("./httpStatusCodes");

class ApiError extends Error {
  constructor(status) {
    super(status);

    this.description = httpStatusCodes[status];
  }
}

module.exports = ApiError;
