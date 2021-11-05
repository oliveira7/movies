const bcrypt = require("bcrypt");
const { users } = require("../models");
const Error400 = require("../errors/Error400");
class UserService {
  constructor() {}

  async create(body) {
    try {
      if (!(body.email && body.password && body.username)) {
        throw new Error400("Dados inválidos.");
      }
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password, salt);

      await users.create(body);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserService;
