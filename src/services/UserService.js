const bcrypt = require("bcrypt");
const Invalidfield = require("../errors/Invalidfield");
const DataNotProvided = require("../errors/DataNotProvided");
const { User } = require("../models");

class UserService {
  constructor() {}

  async create(body) {
    try {
      if (!(body.email && body.password && body.username)) {
        throw new DataNotProvided();
      }
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password, salt);

      await User.create(body);
    } catch (err) {
      throw new Invalidfield();
    }
  }
}

module.exports = UserService;
