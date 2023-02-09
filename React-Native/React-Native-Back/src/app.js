const express = require("express");
const cors = require("cors");
const initModels = require("./models/init.models");
const db = require("./utils/db");
const authRouter = require("./routes/auth.routes");
const propertiesRouter = require("./routes/properties.routes");
const favoritesRouter = require("./routes/favorites.routes");
const usersRouter = require("./routes/users.routes");

const app = express();
app.use(express.json());
app.use(cors());

initModels();

app.use("/register", authRouter);
app.use("/users", usersRouter);
app.use("/properties", propertiesRouter);
app.use("/favorites", favoritesRouter);


db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));


module.exports = app;