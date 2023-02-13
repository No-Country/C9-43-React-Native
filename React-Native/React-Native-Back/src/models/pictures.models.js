const db = require("../utils/db");
const { DataTypes } = require("sequelize");

const Pictures = db.define("pictures", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  pictureUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  propertyId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Pictures;