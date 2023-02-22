const db = require("../utils/db");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

const Users = db.define("users", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  confirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
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
  profilePicture: {
    type: DataTypes.STRING
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  documentId: {
    type: DataTypes.INTEGER
  },
  token: {
    type: DataTypes.STRING(450)
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