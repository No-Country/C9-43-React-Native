const AuthServices = require("../services/auth.services");

const register = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await AuthServices.register(newUser);
    if (result) {
      res.status(201).json({ message: "Usuario creado exitosamente" });
    } else {
      next({ message: "Something went wrong" });
    }
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      next({ error: "Missing information", message: "Email not provided" });
    };
    if (!password) {
      next({ error: "Missing information", message: "Password not provided" });
    };
    const result = await AuthServices.login(email, password);
    if (result.isValid) {
      const userData = result.user;
      const token = await AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else {
      next({ message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login }