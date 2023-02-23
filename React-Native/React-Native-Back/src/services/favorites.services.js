const favorites = require("../models/favorites.models");
const properties = require("../models/properties.models");
const users = require("../models/users.models");
const pictures = require("../models/pictures.models");

class FavoritesServices {
  static async getByUser(id) {
    try {
      const result = await favorites.findAll({
        where: { userId: id },
        include: [{
          model: properties,
          as: "properties",
          attributes: ["pictures", "businessType", "price", "city", "region", "ambiances", "bathrooms"],
          include: {
            model: pictures,
            as: "pictures"
          }
        }, {
          model: users,
          as: "users",
          attributes: ["profilePicture"]
        }]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
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