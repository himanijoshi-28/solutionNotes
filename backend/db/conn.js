const mongoose = require("mongoose");
require('dotenv').config()

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_UNAME}:${process.env.DB_PASSWORD}@sncluster.ydcezi1.mongodb.net/files?retryWrites=true&w=majority`
  )
  .then(() => console.log("connected"))
  .catch((err) => {
    console.log(err);
  });
