const httpStatusCodes = require("./httpStatusCodes");
const BaseError = require("./baseError");

class Error404 extends BaseError {
  constructor(
    name,
    statusCode = httpStatusCodes.NOT_FOUND,
    description = "Bad Request.",
    isOperational = true
  ) {
    super(name, statusCode, isOperational, description);
  }
}

module.exports = Error404;
