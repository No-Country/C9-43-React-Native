const AuthServices = require("../services/auth.services");
const UsersServices = require("../services/users.services");
const transporter = require("../utils/mailer");
require("dotenv").config();

const register = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await AuthServices.register(newUser);
    if (result) {
      const url = `${process.env.PUBLIC_URL}/api/v1/auth/confirmation/${result.id}/${result.token}`;
      await transporter.sendMail({
        from: process.env.O_EMAIL,
        to: result.email,
        subject: "Confirmar Email || Home Quest",
        html: `<h1>Confirma tu email</h1> <p></p><p>Solo haz click en el siguiente <a href=${url}>${url}</a>`
      });
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
    const userConfirmed = await UsersServices.getByEmail(email);
    if (userConfirmed.confirmed) {
      const result = await AuthServices.login({ email, password });
      if (result.isValid) {
        const { id, email } = result.user;
        const userData = { id, email };
        const token = await AuthServices.genToken(userData);
        userData.token = token;
        userData.userId = userData.id;
        delete userData.id;
        res.json(userData);
      } else {
        next({ message: "Credendiales erroneas" });
      }
    } else {
      next({ error: "Confirmación imcompleta", message: "No has confirmado tu correo electrónico" });
    }
  } catch (error) {
    next(error);
  }
};

const confirmation = async (req, res, next) => {
  try {
    const { id, token } = req.params;
    const result = await AuthServices.confirmation(id, token);
    if (result) {
      await UsersServices.update(id, { confirmed: true, token: null });
      res.json({ message: "Usuario confirmó su correo exitosamente" });
    } else {
      next({ message: "Error en la confirmación de correo" });
    }
  } catch (error) {
    next(error)
  }
};

module.exports = { register, login, confirmation }