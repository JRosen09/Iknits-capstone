//import from the backend with node
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { SERVER_PORT } = process.env;
const { sequelize } = require("./util/database");

const app = express();

app.use(express.json());
app.use(cors());

sequelize
  .sync()
  .then(() => {
    app.listen(SERVER_PORT, console.log(`Beam me up Scotty ${SERVER_PORT}!`));
  })
  .catch((err) => console.log(err));
