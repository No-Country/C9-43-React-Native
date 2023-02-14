const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token.replace("Bearer ", "");
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, { algorithms: "HS512" }, (err, decoded) => {
      if (err) {
        res.status(498).json({ error: "Invalid token", message: "Tu token no es válido, por favor envía un token válido" });
      } else {
        console.log(decoded);
        next();
      }
    })
  } else {
    res.status(400).json({ error: "No token provided", message: "No se proporcionó token de autenticación" });
  }
};

module.exports = authMiddleware;
