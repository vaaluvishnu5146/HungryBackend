const mongoose = require("mongoose");

mongoose
  .connect(`mongodb://localhost:27017/${process.env.NODE_MONGODB_NAME}`)
  .then((response) => {
    if (response) {
      console.log("DATABASE CONNECTED");
    }
  })
  .catch((err) => console.log(err));
