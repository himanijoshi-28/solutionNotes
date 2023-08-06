const express = require("express");
const app = express();
require("./db/conn");
const Practical = require("./models/practical");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/practical", upload.single("file"), async(req, res) => {
  const prac = new Practical({
    sem: req.body.sem,
    subject: req.body.subject,
    pracNumber: req.body.pracNumber,
    file: req.file.path,
  });
  await prac
    .save()
    .then(() => console.log("added successfully"))
    .catch((err) => console.log(err));
});

app.get("post", (req,res)=>{
    res.send("hello2")
})

app.listen(5000, () => {
  console.log("Server is listining on port 5000");
});
