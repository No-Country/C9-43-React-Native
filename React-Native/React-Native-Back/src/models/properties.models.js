const db = require("../utils/db");
const { DataTypes } = require("sequelize");

const Properties = db.define("properties", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  user_id: {
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
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
  },
  sq_meters: {
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
  built_year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_available: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  property_type: {
    type: DataTypes.ENUM("casa", "departmento", "penthouse", "terreno", "oficina", "otros"),
    allowNull: false
  },
  parking: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

module.exports = Properties;