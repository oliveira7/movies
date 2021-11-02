const bcrypt = require("bcrypt");
const database = require("../models");

class UserService {
  constructor() {}

  async create(body) {
    try {
      if (!(body.email && body.password && body.username)) {
        throw new Error({ error: "Dados inválidos!" });
      }
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password, salt);

      await database.Users.create(body);
    } catch (err) {
      throw new Error({ message: err.message });
    }
  }
}

module.exports = UserService;
