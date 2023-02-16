const properties = require("../models/properties.models");

class PropertiesServices {
  static async create(newProperty) {
    try {
      const result = await properties.create(newProperty);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async update(id, field) {
    try {
      const result = await properties.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = await properties.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = PropertiesServices;