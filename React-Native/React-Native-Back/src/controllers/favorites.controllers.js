const FavoritesServices = require("../services/favorites.services");

const createFavorite = async (req, res) => {
  try {
    const newFavorite = req.body;
    const result = await FavoritesServices.create(newFavorite);
    if (result) {
      res.status(201).json({ message: "Favorito creado exitosamente" });
    } else {
      res.status(400).json({ message: "Algo salió mal" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await FavoritesServices.delete(id);
    if (result) {
      res.json({ message: "Favorito eliminado exitosamente" });
    } else {
      res.status(400).json({ message: "Algo salió mal" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = { createFavorite, deleteFavorite };