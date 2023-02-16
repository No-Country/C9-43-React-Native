const AuthServices = require("../services/auth.services");
const error = require("../middlewares/error.middleware");

const register = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await AuthServices.register(newUser);
    if (result) {
      res.status(201).json({ message: "Usuario creado exitosamente" });
    } else {
      next({ message: "Usuario ya existe en la base de datos" });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      next({ error: "Información faltante", message: "No se proporció un email" });
    };
    if (!password) {
      next({ error: "Información faltante", message: "No se proporció una contraseña" });
    };
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, id, email }
      const token = await AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else {
      next({ message: "Credendiales erroneas" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login }