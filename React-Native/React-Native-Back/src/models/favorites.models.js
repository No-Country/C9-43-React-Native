const db = require("../utils/db");
const { DataTypes } = require("sequelize");

const Favorites = db.define("favorites", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  propertyId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Favorites;