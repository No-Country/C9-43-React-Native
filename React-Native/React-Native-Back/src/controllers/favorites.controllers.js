const FavoritesServices = require("../services/favorites.services");

const createFavorite = async (req, res, next) => {
  try {
    const newFavorite = req.body;
    const result = await FavoritesServices.create(newFavorite);
    if (result) {
      res.status(201).json({ message: "Favorito creado exitosamente" });
    } else {
      next({ message: "Algo salió mal" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await FavoritesServices.delete(id);
    if (result) {
      res.json({ message: "Favorito eliminado exitosamente" });
    } else {
      next({ message: "Algo salió mal" });
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { createFavorite, deleteFavorite };