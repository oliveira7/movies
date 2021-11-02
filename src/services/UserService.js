const bcrypt = require("bcrypt");
const { Users } = require("../models");

class UserService {
  constructor() {}

  async create(body) {
    try {
      if (!(body.email && body.password && body.username)) {
        throw new Error("Dados inválidos!");
      }
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password, salt);

      await Users.create(body);
    } catch (err) {
      const error = new Error(err.message);
      throw error;
    }
  }
}

module.exports = UserService;
