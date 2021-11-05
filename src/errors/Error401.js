const httpStatusCodes = require("./httpStatusCodes");
const BaseError = require("./baseError");

class Error401 extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCodes.AUTHORIZATION_REQUIRED,
    description = "Unauthorized.",
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}

module.exports = Error401;
