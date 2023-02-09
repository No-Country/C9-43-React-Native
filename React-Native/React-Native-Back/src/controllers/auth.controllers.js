const AuthServices = require("../services/auth.services");

const register = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await AuthServices.register(newUser);
    if (result) {
      res.status(201).json({ message: "Usuario creado exitosamente" });
    } else {
      res.status(400).json({ message: "Algo salió mal" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { register }