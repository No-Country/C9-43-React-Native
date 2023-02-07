const db = require("../utils/db");
const { DataTypes } = require("sequelize");

const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
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
});

module.exports = Users;