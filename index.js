const express = require("express");
const nodeserver = express();
const env = require("dotenv");
const cors = require("cors");

// CONFIGURING ENVIRONMENT VARIABLES
env.config();

// CONFIGURING CORS
nodeserver.use(cors());

// INJECT APP SERVER
nodeserver.use("/", require("./app"));

// CONFIGS
const port = process.env.NODE_SERVER_PORT || 4000;
const hostname = process.env.NODE_HOST_NAME;

// LISTEN TO NODE SERVER
nodeserver.listen(port, hostname, () => {
  console.log("SERVER STARTED", port);
  require("./dbconfig");
});
