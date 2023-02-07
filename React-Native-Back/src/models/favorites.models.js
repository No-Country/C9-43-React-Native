const db = require("../utils/db");
const { DataTypes } = require("sequelize");

const Favorites = db.define("favorites", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  property_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Favorites;