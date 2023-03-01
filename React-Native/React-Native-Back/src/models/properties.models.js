const db = require("../utils/db");
const { DataTypes } = require("sequelize");

const Properties = db.define("properties", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sqMeters: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  ambiances: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bedrooms: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bathrooms: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  antiquity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  propertyType: {
    type: DataTypes.ENUM("casa", "departamento", "terreno"),
    allowNull: false
  },
  businessType: {
    type: DataTypes.ENUM("venta", "alquiler"),
    allowNull: false
  },
  parking: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Properties;
