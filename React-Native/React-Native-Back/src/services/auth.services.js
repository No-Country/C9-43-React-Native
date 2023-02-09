const users = require("../models/users.models");

class AuthServices {
  static async register(newUser) {
    try {
      const result = await users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = AuthServices;

//email, password, username, phone