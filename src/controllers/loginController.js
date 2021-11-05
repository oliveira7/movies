const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/auth");
const { users } = require("../models");

module.exports = {
  async index(req, res) {
    const { email, password } = req.body;

    const userExist = await users.findOne({ email });

    if (!userExist) {
      return res.status(400).json({
        error: true,
        message: "Usuário não existe!",
      });
    }

    if (!(await bcrypt.compare(password, userExist.password))) {
      return res.status(400).json({
        error: true,
        message: "A senha está inválida!",
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
  },
};
