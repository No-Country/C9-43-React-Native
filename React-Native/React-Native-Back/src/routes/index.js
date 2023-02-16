const authRouter = require("../routes/auth.routes");
const propertiesRouter = require("../routes/properties.routes");
const favoritesRouter = require("../routes/favorites.routes");
const usersRouter = require("../routes/users.routes");

const routerApi = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/users", usersRouter);
  app.use("/api/v1/properties", propertiesRouter);
  app.use("/api/v1/favorites", favoritesRouter);
};

module.exports = routerApi;