const express = require("express");
require("dotenv").config();

//app
const app = express();
const mongoose = require("mongoose");

//routes


//conect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
