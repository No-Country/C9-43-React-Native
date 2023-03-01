const UsersServices = require("../services/users.services");


const getUserProperties = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UsersServices.getProperties(id);
    if (result) {
      res.json(result);
    } else {
      next({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    next(error)
  }
};

const getUserFavorites = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UsersServices.getFavorites(id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await UsersServices.update(id, field);
    if (result) {
      res.json({ message: "Usuario actualizado exitosamente" });
    } else {
      next({ message: "Algo salió mal" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UsersServices.delete(id);
    if (result) {
      res.json({ message: "Usuario eliminado exitosamente" });
    } else {
      next({ message: "Algo salió mal" });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { updateUser, deleteUser, getUserProperties, getUserFavorites };