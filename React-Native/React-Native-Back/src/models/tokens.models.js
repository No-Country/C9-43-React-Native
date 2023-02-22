const db = require("../utils/db");
const { DataTypes } = require("sequelize");

const Tokens = db.define("tokens", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Tokens;