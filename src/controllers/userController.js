const UserService = require("../services/UserService");
const UserServiceInstance = new UserService();

module.exports = {
  async store(req, res, next) {
    try {
      const { body } = req;
      await UserServiceInstance.create(body);

      res.status(201).end();
    } catch (err) {
      return res.status(err.statusCode).json({
        message: err.name,
      });
    }
  },
};
