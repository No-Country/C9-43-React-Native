const favorites = require("../models/favorites.models");

class FavoritesServices {
  static async create(newFavorite) {
    try {
      const result = await favorites.create(newFavorite);
      return result;
    } catch (error) {
      throw error
    }
  }
  static async delete(id) {
    try {
      const result = await favorites.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = FavoritesServices;