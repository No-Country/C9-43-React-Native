const PropertiesServices = require("../services/properties.services");

const createProperty = async (req, res, next) => {
  try {
    const newProperty = req.body;
    const result = await PropertiesServices.create(newProperty);
    if (result) {
      res.status(201).json({ message: "Propiedad creada exitosamente" });
    } else {
      next({ message: "Algo salió mal" });
    }
  } catch (error) {
    next(error);
  }
};

const updateProperty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await PropertiesServices.update(id, field);
    if (result) {
      res.json({ message: "Propiedad actualizada exitosamente" });
    } else {
      next({ message: "Algo salió mal" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteProperty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PropertiesServices.delete(id);
    if (result) {
      res.json({ message: "Propiedad eliminada exitosamente" });
    } else {
      next({ message: "Algo salió mal" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { createProperty, updateProperty, deleteProperty };