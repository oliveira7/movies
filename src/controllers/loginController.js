const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/auth");
const { users } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const { email, password } = req.body;

      const userExist = await users.findOne({ email });

      if (!userExist) {
        return res.status(400).json({
          error: true,
          message: "Usuário não existe!",
        });
      }

      if (!(await bcrypt.compare(password, userExist.password)) || email !== userExist.email) {
        return res.status(400).json({
          error: true,
          message: "Email ou senha inválidos!",
        });
      }

      return res.status(200).json({
        user: {
          name: userExist.name,
          email: userExist.email,
        },
        token: jwt.sign({ id: userExist._id }, config.secret, {
          expiresIn: config.expireIn,
        }),
      });
    } catch (err) {
      return res.status(err.statusCode).json({
        message: err.name,
      });
    }
  },
};
