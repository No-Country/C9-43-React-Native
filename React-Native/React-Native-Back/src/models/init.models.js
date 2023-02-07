const Properties = require("./properties.models");
const Users = require("./users.models");
const Favorites = require("./favorites.models");

const initModels = () => {
  Properties.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(Properties, { as: "property", foreignKey: "user_id" });

  Favorites.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(Favorites, { as: "favorite", foreignKey: "user_id" });

  Favorites.belongsTo(Properties, { as: "property", foreignKey: "property_id" });
  Properties.hasMany(Favorites, { as: "favorite", foreignKey: "property_id" });
}

module.exports = initModels;