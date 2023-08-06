const mongoose = require("mongoose");
require('dotenv').config()

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_UNAME}:${process.env.DB_PASSWORD}@cluster0.u4rbeir.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("connected"))
  .catch((err) => {
    console.log(err);
  });
