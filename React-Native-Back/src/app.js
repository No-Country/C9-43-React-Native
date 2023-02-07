const express = require("express");
const cors = require("cors");
const initModels = require("./models/init.models");
const db = require("./utils/db");

const app = express();
app.use(express.json());
app.use(cors());

initModels();

db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: true })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));


module.exports = app;