const UsersServices = require("../services/users.services");

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

module.exports = { updateUser, deleteUser };