const PropertiesServices = require("../services/properties.services");
const PicturesServices = require("../services/pictures.services");

const createProperty = async (req, res, next) => {
  try {
    const newProperty = req.body;
    const [{ pictures }] = req.body;
    const result = await PropertiesServices.create(newProperty);
    const { id: propertyId } = result;
    const picturesArray = pictures.map(url => {
      return { url, propertyId }
    });
    const addedPictures = await PicturesServices.addPictures(picturesArray);
    if (result && addedPictures) {
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