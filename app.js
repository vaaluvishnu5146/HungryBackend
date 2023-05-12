const express = require("express");
const appserver = express();
const bodyparser = require("body-parser");

// INJECT MIDDLE WARES
appserver.use(bodyparser.json());

// INJECT CONTROLLERS
appserver.use("/api/auth", require("./Controllers/Authentication.controller"));
appserver.use(
  "/api/restaurants",
  require("./Controllers/Restaurants.controller")
);
appserver.use("/api/food", require("./Controllers/Food.controller"));

module.exports = appserver;
