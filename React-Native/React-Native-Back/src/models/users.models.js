const db = require("../utils/db");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.STRING,
  },
  document_id: {
    type: DataTypes.INTEGER,
  }
}, {
  hooks: {
    beforeCreate: (user, options) => {
      const { password } = user;
      const hash = bcrypt.hashSync(password, 10);
      user.password = hash
    }
  },
});

module.exports = Users;