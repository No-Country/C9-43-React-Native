const Favorites = require("../models/favorites.models");
const Pictures = require("../models/pictures.models");
const Properties = require("../models/properties.models");
const Users = require("../models/users.models");

class UsersServices {

  static async getByEmail(email) {
    try {
      const result = await Users.findOne({ where: { email } });
      return result;
    } catch (error) {
      throw error
    }
  }
  static async update(id, field) {
    try {
      const result = Users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = Users.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getProperties(id) {
    try {
      const result = await Users.findAll({
        where: { id },
        attributes: ["firstName", "lastName", "profilePicture"],
        include: {
          model: Properties,
          as: "property",
          attributes: ["businessType", "price", "city", "region", "ambiances", "bathrooms", "address"],
          include: {
            model: Pictures,
            as: "picture",
            attributes: ["pictureUrl"]
          }
        }
      });
      return result;
    } catch (error) {
      throw error
    }
  }
  static async getFavorites(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["profilePicture"],
        include: {
          model: Favorites,
          as: "favorite",
          attributes: ["id"],
          include: {
            model: Properties,
            as: "property",
            attributes: ["businessType", "price", "city", "region", "ambiances", "bathrooms", "address"],
            include: {
              model: Pictures,
              as: "picture",
              attributes: ["pictureUrl"]
            }
          }
        }
      });
      return result
    } catch (error) {
      throw error;
    }
  }
};

module.exports = UsersServices;

