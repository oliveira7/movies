const jwt = require("jsonwebtoken");
const config = require("../../config/auth");
const { promisify } = require("util");
const Error401 = require("../errors/Error401");

module.exports = async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({
      name: "O token de autenticação não existe!",
    });
  }

  const [, token] = auth.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, config.secret);

    if (!decoded) {
      return res.status(401).json({
        name: "O token está expirado!",
      });
    } else {
      req.user_id = decoded.id;
      next();
    }
  } catch {
    return res.status(401).json({
      name: "O token está inválido!",
    });
  }
};
