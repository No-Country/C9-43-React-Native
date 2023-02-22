const express = require("express");
const cors = require("cors");
const initModels = require("./models/init.models");
const routerApi = require("./routes");
const error = require("./middlewares/error.middleware");
const db = require("./utils/db");

const app = express();
app.use(express.json());
app.use(cors());
routerApi(app);
initModels();
app.use(error);

db.sync({ force: true })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

module.exports = app;