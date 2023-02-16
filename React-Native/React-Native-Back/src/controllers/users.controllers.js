const UsersServices = require("../services/users.services");

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await UsersServices.update(id, field);
    if (result) {
      res.json({ message: "Usuario actualizado exitosamente" });
    } else {
      res.status(400).json({ message: "Algo salió mal" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UsersServices.delete(id);
    if (result) {
      res.json({ message: "Usuario eliminado exitosamente" });
    } else {
      res.status(400).json({ message: "Algo salió mal" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = { updateUser, deleteUser };