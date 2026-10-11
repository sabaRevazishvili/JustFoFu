const express = require("express");
require("dotenv").config();

//app
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

//middleware

//routes

//conect to db
const { setServers } = require("dns/promises");
setServers(["8.8.8.8", "1.1.1.1"]);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
