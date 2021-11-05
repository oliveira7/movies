const httpStatusCodes = require("./httpStatusCodes");
const BaseError = require("./baseError");

class Error400 extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCodes.BAD_REQUEST,
    description = "Not Found.",
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}

module.exports = Error400;
