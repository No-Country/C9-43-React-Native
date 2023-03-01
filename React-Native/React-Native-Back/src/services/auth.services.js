const users = require("../models/users.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthServices {
  static async register(newUser) {
    try {
      const token = jwt.sign(newUser, process.env.JWT_SECRET, {
        algorithm: "HS512"
      });
      const tokenUser = { ...newUser, token }
      const result = await users.create(tokenUser);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async login(credentials) {
    try {
      const { email, password } = credentials;
      const user = await users.findOne({
        where: { email },
        attributes: ["email", "id", "password"]
      });
      if (user) {
        const isValid = bcrypt.compareSync(password, user.password);
        return isValid ? { isValid, user } : { isValid };
      }
      return { isValid: false };
    } catch (error) {
      throw error;
    }
  }
  static async confirmation(id, token) {
    try {
      const result = await users.findOne({ where: { id } });
      if (result) {
        const isValid = result.token === token;
        return isValid
      }
      return { isValid: false }
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
