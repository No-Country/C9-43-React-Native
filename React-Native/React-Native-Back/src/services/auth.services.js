const users = require("../models/users.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthServices {
  static async register(newUser) {
    try {
      const result = await users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async login(credentials) {
    try {
      const { email, password } = credentials;
      const user = await users.findOne({ where: { email } });
      // include: ["email", "username", "id", "profilePicture", "firstName"]
      if (user) {
        const isValid = bcrypt.compareSync(password, user.password);
        return isValid ? { isValid, user } : { isValid };
      }
      return { isValid: false };
    } catch (error) {
      throw error;
    }
  }
  static async genToken(userData) {
    try {
      const token = jwt.sign(userData, process.env.JWT_SECRET, {
        algorithm: "HS512"
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = AuthServices;