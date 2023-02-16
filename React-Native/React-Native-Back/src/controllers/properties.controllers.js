const PropertiesServices = require("../services/properties.services");

const createProperty = async (req, res) => {
  try {
    const newProperty = req.body;
    const result = await PropertiesServices.create(newProperty);
    if (result) {
      res.status(201).json({ message: "Propiedad creada exitosamente" });
    } else {
      res.status(400).json({ message: "Algo salió mal" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await PropertiesServices.update(id, field);
    if (result) {
      res.json({ message: "Propiedad actualizada exitosamente" });
    } else {
      res.status(400).json({ message: "Algo salió mal" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PropertiesServices.delete(id);
    if (result) {
      res.json({ message: "Propiedad eliminada exitosamente" });
    } else {
      res.status(400).json({ message: "Algo salió mal" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};



module.exports = { createProperty, updateProperty, deleteProperty };