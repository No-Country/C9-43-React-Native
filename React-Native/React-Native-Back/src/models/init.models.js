const Properties = require("./properties.models");
const Users = require("./users.models");
const Favorites = require("./favorites.models");
const Pictures = require("./pictures.models");

const initModels = () => {
  Properties.belongsTo(Users, { as: "user", foreignKey: "userId" });
  Users.hasMany(Properties, { as: "property", foreignKey: "userId" });

  Favorites.belongsTo(Users, { as: "user", foreignKey: "userId" });
  Users.hasMany(Favorites, { as: "favorite", foreignKey: "userId" });
  Favorites.belongsTo(Properties, { as: "property", foreignKey: "propertyId" });
  Properties.hasMany(Favorites, { as: "favorite", foreignKey: "propertyId" });

  Pictures.belongsTo(Properties, { as: "property", foreignKey: "propertyId" });
  Properties.hasMany(Pictures, { as: "picture", foreignKey: "propertyId" });
}

module.exports = initModels;