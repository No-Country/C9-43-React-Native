const users = require("../models/users.models");

class UsersServices {
  static async getByEmail(email) {
    try {
      const result = await users.findOne({ where: { email } });
      return result;
    } catch (error) {
      throw error
    }
  }
  static async update(id, field) {
    try {
      const result = users.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id) {
    try {
      const result = users.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = UsersServices;

